import { LitElement, html, CSSResultGroup, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import clientListData from "../data/endorsements.json" assert { type: "json" };

const clientLogoPath = './images/brands/';

const tagName = 'client-list';

@customElement(tagName)
export class ClientList extends LitElement {
  static styles: CSSResultGroup  = [
    css`
    section {
      background-color: white;
      border-radius: 3px;
      padding: var(--size-4);
      display: flex;
      flex-direction: column;
      align-items: center;
      box-shadow: var(--shadow-4);
      text-align: center;
    }

    .title {
      color: var(--brand);
      text-transform: uppercase;
      margin-bottom: 1rem;
    }

    .clients {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
    }

    .clients img {
      height: fit-content;
      transform: scale(0.75);
    }
    `
  ];
  
  render() {
    return html`
    <section>
      <h4 class="title">Trusted by companies worldwide</h4>
      <div class="clients">
      ${clientListData.map((client) =>
        html`
          <span itemscope itemtype="https://schema.org/EndorseAction">
            <span itemprop="agent" itemscope itemtype="https://schema.org/Organization">
              <meta itemprop="name" content="${client.name}">
              <meta itemprop="description" content="${client.description}">
              <meta itemprop="sameAs" content="${client.url}">
              <span itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
                <meta itemprop="addressCountry" content="${client.address.addressCountry}">
              </span>
              <img src="${clientLogoPath}${client.logo.identifier}" itemprop="logo" alt="${client.name + " Logo"}" title="${client.description}">
            </span>
            <span itemprop="endorsee" itemscope itemtype="https://schema.org/Organization">
              <meta itemprop="name" content="Looptimize" />
              <meta itemprop="sameAs" content="https://www.looptimize.org" />
            </span>
          </span>
          `
        )}
      </div>
    </section>
    `;
  }
}
