import { LitElement, html, CSSResultGroup, css, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import testimonialsData from "../data/customer_testimonials.json" assert { type: "json" };
import companyData from "../data/company_details.json" assert { type: "json" };

const clientLogoPath = './images/testimonials/';

const tagName = 'customer-testimonials';

@customElement(tagName)
export class CustomerTestimonials extends LitElement {
  static styles: CSSResultGroup  = [
    css`
      .title {
        color: var(--brand);
        text-transform: uppercase;
        margin-bottom: 1rem;
      }

      blockquote p {
        font-style: italic;
      }

      div[itemprop="author"] {
        font-weight: 700;
      }
    `
  ];

  protected render(): TemplateResult<1> {
    return html`
    <section>
      <h4 class="title">Customer Testimonials</h4>
      <div class="testimonials">
      ${testimonialsData.map((testimonial) =>
        html`
          <span itemscope itemtype="https://schema.org/Review">
            <div>
              <img 
              src="${clientLogoPath + testimonial.author.image.identifier}" 
              alt="${`${testimonial.author.givenName} ${testimonial.author.familyName}: ${testimonial.author.jobTitle} at ${testimonial.author.worksFor.name}`}">
            </div>
            <span itemprop="reviewRating" itemscope itemtype="https://schema.org/Rating">
              <meta itemprop="ratingValue" content="${testimonial.reviewRating}" />
            </span>
            <blockquote itemprop="reviewBody">
              <p>${testimonial.reviewBody}</p>
            </blockquote>
            <span itemprop="itemReviewed" itemscope itemtype="https://schema.org/Organization">
              <meta itemprop="name" content="${companyData.name}">
              <meta itemprop="sameAs" content="${companyData.url}">
            </span>
            <div id="person" itemprop="author" itemscope itemtype="https://schema.org/Person">
              <meta itemprop="image" content="${new URL(testimonial.author.image.identifier, companyData.url + clientLogoPath).toString()}">
              <span itemprop="givenName">${testimonial.author.givenName}</span> 
              <span itemprop="familyName">${testimonial.author.familyName}</span>, 
              <span itemprop="jobTitle">${testimonial.author.jobTitle}</span> at 
              <span itemprop="worksFor" itemscope itemtype="https://schema.org/Organization">
                <span itemprop="name">${testimonial.author.worksFor.name}</span>
                <meta itemprop="description" content="${testimonial.author.worksFor.description}" />
                <meta itemprop="sameAs" content="${testimonial.author.worksFor.url}" />
              </span>
            </div>
          </span>
          `
        )}
      </div>
    </section>
    `
  }
}