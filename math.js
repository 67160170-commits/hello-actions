export const add = (a, b) => a + b;

export const divide = (a, b) => {
  if (b === 0) throw new Error('หารด้วยศูนย์ไม่ได้');
  return a / b;
};

export const sortNumbers = (list) => [...list].sort((a, b) => a - b);

export const fetchScore = async (id) => {
  if (id < 0) throw new Error('id ต้องไม่ติดลบ');
  return { id, score: 80 };
};
