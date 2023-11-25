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

export const formatNum = (num) => {
  if (num >= 1e9) {
    return (num / 1e9).toFixed(1) + "B";
  } else if (num >= 1e6) {
    return (num / 1e6).toFixed(1) + "M";
  } else if (num >= 1e3) {
    return (num / 1e3).toFixed(1) + "K";
  } else {
    return num.toString();
  }
};
