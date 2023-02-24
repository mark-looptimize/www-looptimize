import { LitElement, html, CSSResultGroup, css, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { colorStyleModule } from '../styles/design-system/colors.styles.js';
import companyData from "../data/company_details.json" assert { type: "json" };

const tagName = 'top-nav-bar';

@customElement(tagName)
export class TopNavBar extends LitElement {
  static styles: CSSResultGroup = [
    colorStyleModule,
    css`
      header {
        padding: var(--size-5);
        display: flex;
        justify-content: center;
        box-shadow: var(--shadow-2);
      }
    `
  ];

  protected render(): TemplateResult<1> {
    return html`
      <header class="surface-variant">
        <a href="${companyData.url}" itemprop="url">
          <img src="./images/looptimize_logo.png" alt="${companyData.name} Logo" width="200" itemprop="logo">
        </a>
      </header>
    `;
  }
}