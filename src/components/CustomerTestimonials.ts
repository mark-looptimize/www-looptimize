import { LitElement, html, CSSResultGroup, css, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { typographyStyles } from '../styles/design-system/typography.styles.js';
import { colorStyleModule } from '../styles/design-system/colors.styles.js';
import testimonialsData from "../data/customer_testimonials.json" assert { type: "json" };
import companyData from "../data/company_details.json" assert { type: "json" };

const clientLogoPath = './images/testimonials/';

const tagName = 'customer-testimonials';

@customElement(tagName)
export class CustomerTestimonials extends LitElement {
  static styles: CSSResultGroup  = [
    colorStyleModule,
    typographyStyles,
    css`
    h2 {
      text-align: center;
    }

    div[itemtype="https://schema.org/Review"] {
      display: flex;
      margin: 2rem 0;
    }

    div[itemtype="https://schema.org/Person"] {
      text-align: right;
    }

    .uppercase {
      text-transform: uppercase;
    }
    `
  ];

  protected render(): TemplateResult<1> {
    return html`
    <section>
      <h2 class="headline-small primary-text uppercase">Customer Testimonials</h2>
      <div class="testimonials">
      ${testimonialsData.map((testimonial) =>
        html`
          <div itemscope itemtype="https://schema.org/Review">
            <img loading="lazy" 
              src="${clientLogoPath + testimonial.author.image.identifier}" 
              alt="${`${testimonial.author.givenName} ${testimonial.author.familyName}: ${testimonial.author.jobTitle} at ${testimonial.author.worksFor.name}`}">
            <span itemprop="reviewRating" itemscope itemtype="https://schema.org/Rating">
              <meta itemprop="ratingValue" content="${testimonial.reviewRating}" />
            </span>
            <div>
            <blockquote itemprop="reviewBody" class="title-large">
              <p>${testimonial.reviewBody}</p>
            </blockquote>
            <span itemprop="itemReviewed" itemscope itemtype="https://schema.org/Organization">
              <meta itemprop="name" content="${companyData.name}">
              <meta itemprop="sameAs" content="${companyData.url}">
            </span>
            <div id="person" itemprop="author" itemscope itemtype="https://schema.org/Person" class="title-medium">
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
            </div>
          </div>
          `
        )}
      </div>
    </section>
    `
  }
}