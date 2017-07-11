import * as types from './mutation-types'

export default {
  getPosition({commit}, pos){
    commit(types.GET_POSITION, pos);
  },
  getImgData({commit}, imgdata){
    commit(types.IMG_DATA, imgdata);
  }
};
