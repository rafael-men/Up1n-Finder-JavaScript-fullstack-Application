import Vue from "vue";
import  Toasted  from "vue-toasted";

Vue.use(Toasted,{
    iconPack:'fontawesome',
    duration:3000
})

Vue.toasted.register(
    'defaultSuccess',
    'Realizado Com Sucesso',
    {type:'success',icon:'check'}
)

Vue.toasted.register(
    'defaultError',
    payload => !payload.msg ? 'Erro inesperado' : payload.msg,
    {type:'error',icon:'times'}
)