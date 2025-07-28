const scrapeWebsites = async (label) => {
  console.log('Scraping websites for:', label);

  // Dummy data — simulate scraped results
  return [
    {
      website: 'Amazon',
      product: `${label} - Amazon Edition`,
      price: '₹1999',
      url: 'https://www.amazon.in/dummy-link'
    },
    {
      website: 'Flipkart',
      product: `${label} - Flipkart Variant`,
      price: '₹1850',
      url: 'https://www.flipkart.com/dummy-link'
    },
    {
      website: 'Myntra',
      product: `${label} - Myntra Special`,
      price: '₹2100',
      url: 'https://www.myntra.com/dummy-link'
    }
  ];
};

module.exports = { scrapeWebsites };
