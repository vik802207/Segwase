export function extractFilterOptions(data) {
    const options = {};
  
    data.forEach((row) => {
      Object.keys(row).forEach((key) => {
        if (typeof row[key] === 'string') {
          options[key] = options[key] || new Set();
          options[key].add(row[key]);
        }
      });
    });
  
    const final = {};
    for (const key in options) {
      final[key] = Array.from(options[key]);
    }
  
    return final;
  }
  