import { LitElement, html, CSSResultGroup, css, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import companyData from "../data/company_details.json" assert { type: "json" };

const tagName = 'website-footer';

@customElement(tagName)
export class WebsiteFooter extends LitElement {

  @property({ type: String })
  legalName = companyData.legalName;

  @property({ type: String})
  currentYear = new Date().getFullYear().toString();

  @property({ type: String })
  taxIdentification = companyData.taxID;

  static styles: CSSResultGroup = [
    css`
      footer {
        background-color: var(--surface-2);
        padding: var(--size-4);
        text-align: center;
      }
    `
  ];

  protected render(): TemplateResult<1> {
    return html`
      <footer>
  <small>
    &copy; ${this.currentYear} <span itemprop="legalName">${this.legalName}</span> / <span itemprop="taxID">${this.taxIdentification}</span>
  </small>
</footer>
    `;
  }
}