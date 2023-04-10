export const zip = (a: any[], b: any[]) => {
  const result = [];
  for (let i = 0; i < a.length; i++) {
    result.push([a[i], b[i]]);
  }
  return result;
};
