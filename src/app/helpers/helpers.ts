export const convertAnnotToXml = (file: File) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target.result;
      const xmlContent = `<annotation>${content}</annotation>`;
      resolve(xmlContent);
    };
    reader.onerror = (error) => reject(error);
    reader.readAsText(file);
  });
};
