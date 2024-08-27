import LogoutBtn from "../../components/LogoutBtn";
import { SavingsForm } from "../../components/SavingsForm";
import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

interface DataItem {
  id: number;
  someField: string;
}

const DashBoard: React.FC = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [data, setData] = useState<DataItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (isAuthenticated) {
        try {
          const token = await getAccessTokenSilently();
          const response = await fetch("http://127.0.0.1:5000/get_user/anna", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const result: DataItem[] = await response.json();
          setData(result);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData();
  }, [isAuthenticated, getAccessTokenSilently]);

  if (!isAuthenticated) return <div>Please log in</div>;

  return (
    <>
      <div className="flex sm:flex-col sm:w-fit sm:h-fit md:flex-row items-center justify-center m-auto gap-0 xl:ml-[15rem] xl:mt-[1rem] 2xl:mt-[15rem] 2xl:ml-[40rem]">
        <h1>Welcome, {user?.name}</h1>
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.someField}</li>
          ))}
        </ul>
        <p>YOUR SAVINGS</p>
        <SavingsForm></SavingsForm>
        <div className="sm:w-[300px] md:w-[500px] min-h-[300px] flex items-center justify-center"></div>
      </div>

      <LogoutBtn></LogoutBtn>
    </>
  );
};

export default DashBoard;
