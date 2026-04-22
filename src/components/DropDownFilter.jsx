const DropDownFilter = ({ connectionType, setfilteredMethods }) => {


  const handleFilter =(value)=>{
    if(value==='all') {
      setfilteredMethods([...connectionType]);
      return;
    }

    const temp = connectionType.filter(item=> item.type === value);
    console.log(temp);
    setfilteredMethods([...temp]);
  }
  return (
    <select
      defaultValue=""
      onChange={(e) => handleFilter(e.target.value)}
      className="select"
    >
      <option value="" disabled>
        Filter timeline
      </option>
      <option value="all">All</option>
      <option value="call">Call</option>
      <option value="text">Text</option>
      <option value="video">Video</option>
    </select>
  );
};
export default DropDownFilter
