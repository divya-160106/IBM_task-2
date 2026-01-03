const API_URL = "https://ibm-task-2.onrender.com/api/books";

export const getAllBooks = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const getBooksByCategory = async (category) => {
  const res = await fetch(`${API_URL}/category/${category}`);
  return res.json();
};

export const getBooksAfter2015 = async () => {
  const res = await fetch(`${API_URL}/after/2015`);
  return res.json();
};
