import Alert from "./Alert";

export default {
  title: "Alert",
  component: Alert,
  argTypes: { onClick: { action: "clicked" } },
};

export const Main = (args: any) => <Alert {...args}></Alert>;
Main.args = {
  className: "",
  title: "This is my alert box",
};
