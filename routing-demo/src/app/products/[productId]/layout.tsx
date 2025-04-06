function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}
const ProdutDetailsLayout = ({ children }: { children: React.ReactNode }) => {
  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error("Error loading review");
  }
  return (
    <>
      {children}
      <h2>Featured products</h2>
    </>
  );
};

export default ProdutDetailsLayout;
