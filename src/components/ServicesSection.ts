import { LitElement, html, CSSResultGroup, css, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { colorStyleModule } from '../styles/design-system/colors.styles.js';
import { typographyStyles } from '../styles/design-system/typography.styles.js';

import offerData from "../data/offer_catalogs.json" assert { type: "json" };

// Specify the name of the offer catalogs we want to show in this component.
const approvedCatalogs = ['Continious Optimization Programs', 'One Time Services'];
const offerCatalogs = offerData.filter(catalog => approvedCatalogs.includes(catalog.name));

const tagName = 'services-section';

@customElement(tagName)
export class ServicesSection extends LitElement {

  static styles: CSSResultGroup = [
    colorStyleModule,
    typographyStyles,
    css`
      .uppercase {
        text-transform: uppercase;
        text-align: center;
      }
    `
  ];

  override connectedCallback(){
    super.connectedCallback();
    this.renderMetadata();
  }

  private renderMetadata(){
    const offerMetadata = document.createElement('script');
    offerMetadata.setAttribute('type', 'application/ld+json');
    offerMetadata.textContent = JSON.stringify(offerData);
    this.shadowRoot?.appendChild(offerMetadata);
  }

  protected render(): TemplateResult<1> {
    return html`
      <section class="surface on-surface-text">
        <h2 class="headline-small primary-text uppercase">What We Offer</h2>
        ${offerCatalogs.map((catalog) => html`
          <h3 class="display-small">${catalog.name}</h3>
          ${catalog.itemListElement.map((service) => html`
            <h4 class="title-large">${service.name}</h4>
            <p class="body-large">${service.description}</p>
            <h5 class="title-medium">What's included?</h5>
            <ul>
              ${service.serviceOutput.map((deliverable) => html`
                <li>
                <p class="body-large"><strong>${deliverable.name}</strong></p>
                <p class="body-large">${deliverable.description}</p>
                </li>
              `)}
            </ul>
            <h5 class="title-medium">Offers</h5>
            ${service.offers.filter(offer => offer.availability === 'https://schema.org/InStock').map((offer) => html`
            <p class="body-large"><strong>${offer.name}</strong></p>
            <p class="title-medium">Starting From:</p>
            <ul>
            ${offer.priceSpecification.map((price) => html`
              <li class="body-large">${new Intl.NumberFormat([], {style: 'currency', currency: price.priceCurrency, minimumFractionDigits: 0}).format(parseInt(price.minPrice))} ${price.priceCurrency}</li>
            `)}
            </ul>
            <p class="title-medium">Add Ons</p>
            <ul>
              ${offer.addOn.map((upsell) => html`
                <li>
                  <p class="body-large"><strong>${upsell.name}</strong></p>
                  <p class="body-large">${upsell.description}</p>
                </li>
              `)}
            </ul>
            `)}
            `
            )}  
          `
      )}
      </section>
    `;
  }
}