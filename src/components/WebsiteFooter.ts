import { LitElement, html, CSSResultGroup, css, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { colorStyleModule } from '../styles/design-system/colors.styles.js';

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
    colorStyleModule,
    css`
      footer {
        margin-top: 2rem;
        padding: 2rem;
        text-align: center;
      }
    `
  ];

  protected render(): TemplateResult<1> {
    return html`
      <footer class="surface-variant on-surface-variant-text">
  <p class="body-small">
    &copy; ${this.currentYear} <span itemprop="legalName">${this.legalName}</span> / <span itemprop="taxID">${this.taxIdentification}</span>
  </p>
</footer>
    `;
  }
}