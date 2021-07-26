import React from "react";
import SideBarElement from "./SideBarElement/SideBarElement";
import {
  BiVideoRecording,
  GrGroup,
  GiExplosiveMeeting,
  FaChild,
  BiLogOut,
} from "react-icons/all";
import { logout } from "../APIs/Auth/login";
import { useHistory } from "react-router-dom";

interface Props {
  open?: boolean;
}

const Sidebar: React.FC<Props> = ({ open }) => {
  console.log("Sidebar called!");

  const history = useHistory();

  return (
    <div
      className={
        " md-lg:w-228 md-lg:sidebar transition-transform ease-in-out duration-1000 " +
        (open ? "md-lg:block" : "md-lg:hidden")
      }
    >
      <div className="fixed hidden px-4 text-white transition duration-500 ease-in-out border-r border-gray-300 md-lg:flex sidebar">
        <div>
          <SideBarElement
            onClick={() => history.push("/dashboard")}
            containsDirection={true}
            title="Dashboard"
            theme="fill"
            className="mt-5 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="rgb(224, 230, 237)"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className=" text-sidebar-elements"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </SideBarElement>
          <SideBarElement
            onClick={() => history.push("/batch/1/recording/15")}
            title="Recordings"
          >
            <BiVideoRecording className="w-5 h-5 text-sidebar-elements " />
          </SideBarElement>
          <SideBarElement
            onClick={() => history.push("/groups")}
            title="Groups"
          >
            <GrGroup className="w-5 h-5 text-sidebar-elements " />
          </SideBarElement>
          <SideBarElement
            onClick={() => history.push("/groups/button")}
            title="Groups Button"
          >
            <GrGroup className="w-5 h-5 text-sidebar-elements " />
          </SideBarElement>
          <SideBarElement
            title="Meetings"
            onClick={() => history.push("/not-found")}
          >
            <GiExplosiveMeeting className="w-5 h-5 text-sidebar-elements " />
          </SideBarElement>
          <SideBarElement
            title="Student Report"
            onClick={() => history.push("/not-found")}
          >
            <FaChild className="w-5 h-5 text-sidebar-elements " />
          </SideBarElement>

          <SideBarElement
            onClick={() => {
              logout();
            }}
            title="Logout"
          >
            <BiLogOut className="w-5 h-5 text-sidebar-elements " />
          </SideBarElement>
        </div>
      </div>
    </div>
  );
};

Sidebar.defaultProps = {
  open: true,
};

export default React.memo(Sidebar);
