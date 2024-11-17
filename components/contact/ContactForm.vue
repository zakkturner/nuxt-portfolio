<script setup lang="ts">
import axios, {AxiosError} from "axios";

  const contactMessage = ref(null);
  const formData = reactive({
    name: '',
    email: '',
    message: '',
  })
const api_url = useRuntimeConfig().public.api_url
  const handleSubmit = async() =>{
    try{
       const response =  await axios.post(`${api_url}/api/v1/submissions`, formData);

       if(response.status === 200){
         contactMessage.value = response.data;
       }
    }
    catch (e: any){
      console.log(e.message);
      contactMessage.value = e.message;
    }
  }
</script>

<template>
  <div class="col-sm-6 col-md-6 subpage-block">
    <div class="block-title">
      <h3>Contact Form</h3>
    </div>
    <form
        name="contact-form"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact-form"/>
      <div class="messages"></div>

      <div class="controls">
        <div class="form-group">
          <input
              id="form_name"
              type="text"
              name="name"
              class="form-control"
              placeholder="Full Name"
              required
              data-error="Name is required."
              v-model="formData.name"
          />
          <div class="form-control-border"></div>
          <i class="form-control-icon pe-7s-user"></i>
          <div class="help-block with-errors"></div>
        </div>

        <div class="form-group">
          <input
              id="form_email"
              type="email"
              name="email"
              class="form-control"
              placeholder="Email Address"
              required
              data-error="Valid email is required."
              v-model="formData.email"
          />
          <div class="form-control-border"></div>
          <i class="form-control-icon pe-7s-mail"></i>
          <div class="help-block with-errors"></div>
        </div>

        <div class="form-group">
                <textarea
                    id="form_message"
                    name="message"
                    class="form-control"
                    placeholder="Message for Me"
                    rows="4"
                    required
                    data-error="Please, leave me a message."
                    v-model="formData.message"
                ></textarea>
          <div class="form-control-border"></div>
          <i class="form-control-icon pe-7s-comment"></i>
          <div class="help-block with-errors"></div>
        </div>
        <div v-if="contactMessage" class="form-message">
          <span>{{contactMessage}}</span>
        </div>
        <input
            type="submit"
            class="button btn-send"
            value="Send message"
            @click.prevent="handleSubmit"
        />
      </div>
    </form>
  </div>
</template>
<style scoped>
.form-message{
  width: fit-content;
  background: #4cae4c;
  color: #fff;
  padding-inline: 10px;
  margin-bottom: 10px;
}
</style>
