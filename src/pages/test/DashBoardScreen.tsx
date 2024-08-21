import LogoutBtn from "../../components/LogoutBtn";
import { SavingsForm } from "../../components/SavingsForm";

const DashBoard = () => {
  return (
    <>
      <div className="flex sm:flex-col sm:w-fit sm:h-fit md:flex-row items-center justify-center m-auto gap-0 xl:ml-[15rem] xl:mt-[1rem] 2xl:mt-[15rem] 2xl:ml-[40rem]">
        <p>YOUR SAVINGS</p>
        <SavingsForm></SavingsForm>
        <div className="sm:w-[300px] md:w-[500px] min-h-[300px] flex items-center justify-center"></div>
      </div>

      <LogoutBtn></LogoutBtn>
    </>
  );
};

export default DashBoard;
