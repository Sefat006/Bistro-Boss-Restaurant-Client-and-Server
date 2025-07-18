
const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;

  return (
    <div className="flex space-x-4 items-center">
      <img
        style={{ borderRadius: '0 200px 200px 200px' }}
        className="w-[100px] h-[100px] object-cover"
        src={image}
        alt={name}
      />
      <div className="flex-1">
        <h3 className="uppercase text-lg font-semibold">{name} ---</h3>
        <p className="text-gray-600">{recipe}</p>
      </div>
      <p className="text-yellow-500 font-bold">${price}</p>
    </div>
  );
};


export default MenuItem;