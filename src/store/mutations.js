import * as types from './mutation-types'

export default {

  [types.GET_POSITION](state, pos){
     state.pos = pos;
  },
  [types.IMG_DATA](state, imgdata){
    state.imgdata = imgdata;
  }
};
