export const resolveImagePath = (imagePath?: string) => {
  if (!imagePath) return undefined;

  if (
    imagePath.startsWith("http://") ||
    imagePath.startsWith("https://") ||
    imagePath.startsWith("//")
  ) {
    return imagePath;
  }

  if (imagePath.startsWith("/")) {
    return imagePath;
  }

  return `/${imagePath.replace(/^\.?\//, "")}`;
};
