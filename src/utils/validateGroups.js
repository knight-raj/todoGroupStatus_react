export const validateGroups = (groups) => {
    let covered = new Set();
  
    for (const group of groups) {
      if (group.from < 1 || group.to > 10 || group.from > group.to) return false;
  
      for (let i = group.from; i <= group.to; i++) {
        if (covered.has(i)) return false;
        covered.add(i);
      }
    }
  
    return covered.size === 10;
  };
  