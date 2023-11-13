export const secretEmail = (email) => {
  const [username, domain] = email.split("@");
  const secretUser = username.substring(0, 2) + "*".repeat(username.length - 2);
  return `${secretUser}@${domain}`;
};

export const readTime = (desc) => {
  const averageReading = 225;

  const div = document.createElement("div");
  div.innerHTML = desc.__html;

  const textContext = div.textContent || div.innerHTML;
  const words = textContext.trim().split(/\s+/);
  return Math.ceil(words.length / averageReading);
};
