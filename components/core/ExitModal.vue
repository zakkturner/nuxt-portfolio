<script setup>
import { gsap } from 'gsap'
import axios from "axios";
import FlashMessage from "~/components/contact/FlashMessage.vue";

const contactMessage = ref(null)
const form = reactive({
  rating: 0,
  email: '',
  feedback: ''
})
const activeColor = ref('red');
const ratingText = ref(null);
const exitModal = ref(null);
const exitContainer = ref(null);
const exitWhite = ref(null);
const api_url = useRuntimeConfig().public.api_url;

onMounted(() =>{
  const tl = gsap.timeline();
  const em = exitModal.value;
  const ec = exitContainer.value;
  const ew = exitWhite.value;
  tl.fromTo(em, { opacity: 0 }, { opacity: 1, duration: .2 });
  tl.fromTo(ec, { opacity: 0, x:-200 }, { opacity: 1, x: 0, duration: .5,  ease: "power3.easeOut" });
  tl.fromTo(ew, { opacity: 0, x:200 }, { opacity: 1, x: 0, duration: .5, ease: "power3.easeOut" });
})
const ratingPosition = computed(()=>{
  return form.rating * 10 + '%';
});
const updateColor =()=>{
  if(form.rating <  4){
    activeColor.value = 'red';
  }else if(form.rating >= 4 && form.rating <= 7){
    activeColor.value = '#FCE205';
  } else{
    activeColor.value = 'green';
  }
changeAnimation();
}
const changeAnimation =() =>{
 const rt= ratingText.value;
  if(form.rating % 2 == 0){

    gsap.to( rt,{ rotateZ: 15, ease:"power1"})
  } else {
    gsap.to( rt,{ rotateZ: -15, ease:"power1"})
  }
}
const handleSubmit = async () =>{
  try{

    const response = await axios.post(`${api_url}/api/v1/feedback`, form)
    if(response.status === 200){
      contactMessage.value = response.data.message;
    }
  }catch(e){
    contactMessage.value = e.message;
        console.log(e);
  }
}
</script>
<template>
  <div ref="exitModal" class="exit-modal">

    <div ref="exitContainer" class="exit-container">
      <div class="exit-modal-close">
        <button class="exit-modal-button" @click.prevent="$emit('closeModal')">X</button>
      </div>
      <div ref="exitWhite" class="exit-white-bg">
        <h3 class="exit-title">Before You Go!</h3>
        <form>
          <div class="exit-range-container">
            <label>Rate My Site</label>
            <div class="exit-range-input">
              <input @input.prevent="updateColor" v-model="form.rating" type="range" min="0" max="10" />
              <div ref="ratingText" class="exit-rating"
                   :style=" `font-size: ${Number(form.rating) * 2 + 10 }px;
                   color: ${activeColor};
                   left: ${ratingPosition}`">
                {{form.rating}}
              </div>

            </div>

          </div>
          <div class="form-group">
            <label for="email">Email (Optional)</label>
              <input type="email" name="email" v-model="form.email"/>
          </div>
          <div class="form-group">
            <label for="feedback">FeedBack (optional)</label>
            <textarea name="feedback" v-model="form.feedback" rows="5"></textarea>
          </div>
          <div class="form-group">
            <FlashMessage :message="contactMessage" v-if="contactMessage != null"/>
          <input
              type="submit"
              class="button btn-send"
              value="Send message"
              @click.prevent="handleSubmit"
          /></div>
        </form>
      </div>


    </div>
  </div>
</template>

<style>
.exit-modal {
  position: fixed;
  top: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
}
.exit-modal-close{
  position: absolute;
  z-index: 999;
  top: -2%;
  right: -2%;
}
.exit-modal-button{
  border-radius: 100%;
  font-weight: 700;
  padding: 0;
  height: 30px;
  width: 30px;
  background: #fff;
  transition: all .4s ease-in-out;
}
.exit-container {
  width: 90%;
  background: #4d91de;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 40rem;
  position: relative;
}
.exit-white-bg{
  background: #fff;
  height: 38rem;
  width: 96%;
  padding: 20px;
  top: 2%;
  right: 2%;
  position: absolute;
  border-radius: 8px;
}
.exit-title{
  font-size: 36px;
  text-align: center;
  font-weight: 700;
}
.exit-range-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 45px;

}
.exit-range-input{
  width: 80%;
  position: relative;
}
.exit-rating{
  position: absolute;
  margin-top: 5px;
  font-weight: 700;
  font-size: 24px;
}
.form-group{
  display: flex;
  align-items: center;
  flex-direction: column;
}
.form-group input, .form-group textarea{
  width: 80%;
}

@media screen and (min-width: 1024px){
  .exit-container {
    width: 40%;
  }
}
</style>