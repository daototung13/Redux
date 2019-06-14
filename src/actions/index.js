import  * as CONFIG from './../constants/actionTypes'

export const actionStatus = (student) => {
  return  {
    type: CONFIG.studentType,
    student
  }
};

export const action = (status) => {
  return {
    type: CONFIG.toggleType,
    status
  }
};


