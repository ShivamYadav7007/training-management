import axios from "axios";
import { BASE_URL } from "../../Constants/constants";
import { LS_LOGIN_TOKEN } from "../../Constants/constants";

interface LoginCredentialsRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: User;
  data: Data;
}

export interface Data {
  is_2fa_enabled: boolean;
}

export interface User {
  __type: string;
  id: number;
  guid: null;
  first_name: string;
  middle_name: string;
  last_name: string;
  role: string;
  status: string;
  profile_pic_url: string;
  email: string;
  legal_name: null;
  nick_name: null;
  job_type: null;
  phone_number: string;
  alternate_phone_number: string;
  gender: null;
  birth_year: string;
  birth_month: string;
  birth_date: string;
  death_year: null;
  death_month: null;
  death_date: null;
  urls: any[];
  last_invited_to_platform_at: null;
  education: string;
  hometown: string;
  state_code: string;
  home_state_code: null;
  meta: Meta;
  is_2fa_enabled: boolean;
  default_2fa_type: string;
  created_at: Date;
  updated_at: Date;
  is_zoom_connected: boolean;
  person: Person;
  educations: Education[];
  occupations: Occupation[];
  blockedUsers: any[];
  memberToAdvocatePages: any[];
  ownerToAdvocatePages: any[];
}

export interface Education {
  __type: string;
  id: number;
  user_id: number;
  course_name_short: string;
  course_name: string;
  school_name: string;
  majors: null;
  minors: null;
  start_year: string;
  end_year: string;
  source: string;
  created_at: Date;
  updated_at: Date;
}

export interface Meta {
  caucuses_status: boolean;
  onboarding_feed: boolean;
  onboarding_events: boolean;
  onboarding_groups: boolean;
}

export interface Occupation {
  id: number;
  user_id: number;
  title: string;
  company: string;
  start_year: string;
  end_year: string;
  source: null;
  source_id: null;
  source_updated_at: null;
  created_at: Date;
  updated_at: Date;
  committee: null;
  legMember: null;
  legOffice: null;
}

export interface Person {
  id: number;
  party: string;
  job_type: null;
  chamber: null;
  created_at: Date;
  updated_at: Date;
  committees: PersonCommittees;
  issues: Issue[];
  legMember: null;
  legOffice: LegOffice;
}

export interface PersonCommittees {
  caucuses: any[];
  committees: CommitteesCommittees;
}

export interface CommitteesCommittees {
  parentCommittees: ParentCommittees;
  subCommittees: any[];
}

export interface ParentCommittees {
  money_committees: EconomicPolicyCommittees;
  national_policy_committees: EconomicPolicyCommittees;
  economic_policy_committees: EconomicPolicyCommittees;
  special_purpose_committees: EconomicPolicyCommittees;
  selects_and_commissions: EconomicPolicyCommittees;
  operation_committees: EconomicPolicyCommittees;
  uncategorised: EconomicPolicyCommittees;
}

export interface EconomicPolicyCommittees {}

export interface Issue {
  id: number;
  code: string;
  title_one_word: string;
  title_short: string;
  title: string;
  summary: null | string;
  created_at: Date;
  updated_at: Date;
}

export interface LegOffice {
  id: number;
  person_id: number;
  chamber_id: number;
  state_code: string;
  role: string;
  office_name: string;
  created_at: Date;
  updated_at: Date;
}
const login = async (data: LoginCredentialsRequest) => {
  try {
    const response = await axios.post<LoginResponse>(`${BASE_URL}/login`, data);
    console.log(response);
    localStorage.setItem(LS_LOGIN_TOKEN, response.data.token);
    return response;
  } catch (error) {
    console.error("Not able to send credentials", error);
  }
};

const logout = () => {
  localStorage.removeItem(LS_LOGIN_TOKEN);
  window.location.href = "/login";
};

export { login, logout };
