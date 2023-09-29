

export function generateRandomUserId() {
    // Create a hexadecimal string of 24 characters
    const chars = '0123456789abcdef';
    let randomUserId = '';
  
    for (let i = 0; i < 24; i++) {
      const randomIndex = Math.floor(Math.random() * 16);
      randomUserId += chars[randomIndex];
    }
  
    return randomUserId;
  }
  
  // Example usage:
  const randomUserId = generateRandomUserId();
  console.log(randomUserId);
  




 export function createProductSlug(productName) {
    // Remove special characters and spaces
    const cleanedName = productName.replace(/[^\w\s]/gi, '').trim();
  
    // Convert to lowercase and replace spaces with hyphens
    const slug = cleanedName.toLowerCase().replace(/\s+/g, '-');
  
    return slug;
  }
  
 