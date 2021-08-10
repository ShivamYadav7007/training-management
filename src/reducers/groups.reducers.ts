import { Reducer } from "redux";
import {
  GROUPS_QUERY_COMPLETED,
  GROUP_QUERY,
  GROUP_SELECTED,
  GROUP_SELECTED_ID,
} from "../actions/groups.actions";
import { GroupDataStream } from "../Models/Groups";
import { addMany, EntityState, getIds } from "./entity.reducers";

export interface GroupState extends EntityState<GroupDataStream> {
  query: string;
  mappedData: { [keyword: string]: number[] };
  selectedId: number;
  loadingQuery: boolean;
}

const initialState = {
  byId: {},
  mappedData: {},
  query: "",
  selectedId: -1,
  loadingQuery: false,
};

export const groupsReducer: Reducer<GroupState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GROUP_QUERY:
      const query = action.payload;
      return {
        ...state,
        query: query,
        loadingQuery: true,
      };
    case GROUPS_QUERY_COMPLETED:
      const groupData: GroupDataStream[] = action.payload.groupData;
      console.log(groupData);

      const groupIds = getIds(groupData);
      const newState = addMany(state, groupData) as GroupState;

      return {
        ...newState,
        mappedData: {
          ...newState.mappedData,
          [action.payload.keyword]: groupIds,
        },
        loadingQuery: false,
      };
    case GROUP_SELECTED_ID:
      return { ...state, selectedId: action.payload };
    case GROUP_SELECTED:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.id]: action.payload.group,
        },
      };
    default:
      return state;
  }
};
