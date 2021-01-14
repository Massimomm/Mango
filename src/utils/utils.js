export const generateText = (text, value) => {
  return value ? `${text} ${value} €` : `${text}`;
};
