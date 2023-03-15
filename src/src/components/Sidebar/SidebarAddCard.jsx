import { Button } from "@mui/material";

const SidebarAddCard = (props) => {
  const { onAddNote } = props;

  return (
    <>
      <h1>日報</h1>
      <Button size="small" variant="outlined" onClick={onAddNote}>
        追加
      </Button>
    </>
  );
};

export default SidebarAddCard;