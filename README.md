#Structured Data with Schema.org
First, a quick introduction to Structured Data, specifically, schema.org markup
>_Many sites are generated from structured data, which is often stored in databases. When this data is formatted into HTML, it becomes very difficult to recover the original structured data. Many applications, especially search engines, can benefit greatly from direct access to this structured data. On-page markup enables search engines to understand the information on web pages and provide richer search results in order to make it easier for users to find relevant information on the web. Markup can also enable new tools and applications that make use of the structure._

---

##1. Schema.org Item Types To Use for Real Estate
1. [Product](http://schema.org/Product) __Use:__ Wrap around all information
1. [Offer](http://schema.org/Offer) __Use:__ Wrap around all listing information
1. [Place](http://schema.org/Place) __Use:__ Wrap around _PostalAddress_
1. [PostalAddress](http://schema.org/PostalAddress) __Use:__ Wrap around address info
2. [RealEstateAgent](http://schema.org/RealEstateAgent) __Use:__ Wrap real estate agent details
3. [SearchResultsPage](https://schema.org/SearchResultsPage) __Use:__ Wrap around search results
4. [WebPage](http://schema.org/WebPage) __Use:__ Every page (important links, breadcrumbs, etc)
5. [itemprop="description"](http://www.schema.org/Place) __Use:__ Wrap around description of property

---

##2. Schema.org Item Types For Remainder of Site
For the non-real estate parts of the site, I'm going to be implementing a _smart_ method of applying the necessary schema.org markup, just like I do at [longren.io](http://longren.io). You may have read the post already, but I'll be doing something similar to this, but with slight tweaks to accomodate the real estate industry. You can [read about it at longren.io](http://longren.io/add-schema-org-markup-to-any-wordpress-theme/).

---

##3. Integrate into WordPress Theme Templates
This could take a litle bit of time, and we could possibly end up using more schema.org Item Types than are listed above. I'm sure I'll come across more data on the site that can have meaningful schema.org markup applied to it.

---

##4. Real Estate Listing Example with Schema.org Markup

```html
<div itemscope itemtype="http://schema.org/Product">
  <span itemprop="name">
    3 Bed, 2.5 Bath, Large Storage Shed, New Windows, New Insulation, New Roof
  </span>
  
  <div itemprop="offers" itemscope itemtype="http://schema.org/Offer">
    <div itemprop="availableAtOrFrom" itemscope itemtype="http://schema.org/Place">
      <div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
        <span itemprop="streetAddress">
          415 Main Street
        </span>
        <span itemprop="addressLocality">
          Collins
        </span>
        <span itemprop="addressRegion">
          Iowa
        </span>
        <span itemprop="postalCode">
          50055
        </span>
      </div>
    </div>
    <div itemprop="seller" itemscope itemtype="http://schema.org/RealEstateAgent">
      <span itemprop="name">
        <p>Tyler Longren with This Realty Company</p>
      </span>
    </div>
    <span itemprop="price">
      $299,000
    </span>
    <meta itemprop="priceCurrency" content="USD" />
  </div>
  
  <span itemprop="description">
    Former model home,larger plan, gracious entry, open kitchen w/rich cabinetry, granite and stainless steel appliances, quiet neighborhood
  </span>
</div>
```