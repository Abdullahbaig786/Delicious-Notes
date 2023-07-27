function HomePage() {
  return (
    <div className="bg-palegoldenrod ">
      <h1 className="text-3xl font-bold text-center mb-8">Suggestions</h1>
      <div className="grid grid-cols-3 gap-4 mx-auto max-w-3xl">
        <div className="bg-white shadow rounded-lg p-4">
          <img
            src="https://pr1.nicelocal.com.de/h9a-TeGSy94X27scsOBOZg/587x440,q85/4px-BW84_n0QJGVPszge3NRBsKw-2VcOifrJIjPYFYkOtaCZxxXQ2bZcvYosOaTby9rLCJCH8QVoCkMVf8-76f61I7tLjA5mwIqe6RAm86kIGlQJWb5q8g"
            alt="Food"
            className="w-full h-40 object-cover rounded-t-lg"
          />
          <h2 className="text-lg font-bold mt-2">Best in Berlin</h2>
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <img
            src="https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/00/a0000055/img/basic/a0000055_main.jpg?20180605203623"
            alt="Food"
            className="w-full h-40 object-cover rounded-t-lg"
          />
          <h2 className="text-lg font-bold mt-2">Best in Tokyo</h2>
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <img
            src="https://c8.alamy.com/compde/2ahg9tj/islamabad-die-monal-restaurant-bei-margalla-hugel-malerische-aussicht-auf-einem-sonnigen-blauen-himmel-tag-2ahg9tj.jpg"
            alt="Food"
            className="w-full h-40 object-cover rounded-t-lg"
          />
          <h2 className="text-lg font-bold mt-2">Best in Islamabad</h2>
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
