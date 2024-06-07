const LightBox = (props) => {
  // eslint-disable-next-line react/prop-types
  return (
    <div style={{ display: "flex", flexDirection: "column", rowGap: "30px" }}>
      {props.children}
    </div>
  );
};
export default LightBox;
