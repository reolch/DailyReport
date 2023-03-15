import { Avatar } from "@mui/material";

const SidebarUserIcon = () => {
  return (
    <>
      <Avatar
        alt="Remy Sharp"
        src="/image/user-icon.png"
        sx={{ width: 53, height: 53 }}
      ></Avatar>
      <p>User</p>
    </>
  );
};

export default SidebarUserIcon;
