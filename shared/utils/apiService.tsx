import axios from 'axios';
import { Company, PersonalDetails, Project } from './types';

export const BASE_URL = `${process.env.API_URL}/v1` || 'http://ezfolio.test/api/v1';

export async function getPersonalDetails(): Promise<PersonalDetails | boolean> {
  try {
    const { data } = await axios.get(`${BASE_URL}/fme`);
    return data.data;
  } catch (err) {
    return false;
  }
}

export async function getProjectDetails(): Promise<Project[] | boolean> {
  try {
    const { data } = await axios.get(`${BASE_URL}/fprojects`);
    return data.data;
  } catch (err) {
    return false;
  }
}
export async function getCompanyDetails(): Promise<Company[] | boolean> {
  try {
    const { data } = await axios.get(`${BASE_URL}/fcompanies`);
    return data.data;
  } catch (err) {
    return false;
  }
}

export async function getGithubDetails(): Promise<unknown> {
  try {
    const { data } = await axios.get(`https://api.github.com/repos/harshgoel05/another-portfolio`);
    return data;
  } catch (err) {
    return false;
  }
}
