import { Button, Image } from 'antd';

function R6NavButton() {
  const handleBtnClk = () =>{
    alert("click btn")
  }
  return (
      <Button onClick={handleBtnClk}>
        <Image src="https://www.svgrepo.com/svg/530579/set-up" />
      </Button>
  );
}

export default R6NavButton;
