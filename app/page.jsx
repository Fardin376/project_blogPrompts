import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Create, Discover & Share
        <br />
        <span className="green_gradient text-center">Blog Prompts</span>
      </h1>
      <p className="desc text-center">
        Blog Prompts is an open source prompting tool for modern world to
        discover, create and share creative prompts
      </p>

      <Feed />
    </section>
  );
};
export default Home;
