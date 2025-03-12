import { useEffect, useRef, useState } from "react";

export default function HobbiesPage() {
  const elm = useRef();
  const elmWidth = useRef();
  const elmHeight = useRef();
  const [rerender, setRerender] = useState("");

  useEffect(() => {
    elmWidth.current = elm.current.offsetWidth;
    elmHeight.current = elm.current.offsetHeight;
    console.log("re -rendered");
    setRerender("a");
  }, []);

  return (
    <>
      <h1 ref={elm}>Hobbies Page</h1>
      <p>{`Container width: ${elmWidth.current} Container height: ${elmHeight.current}`}</p>
    </>
  );
}
