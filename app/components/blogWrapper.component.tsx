import { BlogCardComponent } from "./blogCard.component";

export const BlogWrapperComponent = () => {
  return (
    <section className="bg-[#f5f5f5] py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold mb-4">
              My Blog Posts on Hashnode
            </h2>
            <p className="text-lg">
              I occasionally write about my experiences, learnings and opinions
              on various topics.
            </p>
            <p className="text-lg">
              You can find my blog posts on Hashnode, a platform for developers
              to share their stories.
            </p>
          </div>
          <div className="lg:col-span-1">
            <BlogCardComponent />
          </div>
        </div>
      </div>
    </section>
  );
};
