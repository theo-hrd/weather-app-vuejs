<template>
  <main>
    <div class="h-screen pt-10 bg-gradient-to-b from-cyan-500 to-violet-500 text-center">			
      <div class="flex justify-center mb-6 font-semibold text-xl">{{ today }}</div>
      <!-- Search input -->
      <section class="flex items-center max-w-md mx-auto bg-white rounded-lg">
        <div class="w-full">
          <input type="search" 
            class="w-full text-center px-4 py-1 text-gray-800 rounded-full focus:outline-none" 
            placeholder="Search a city"
            v-model="query"
            @keypress="fetchWeather">
        </div>
      </section>

      <!-- Search result -->
      <section class="flex flex-col items-center px-20" v-if="typeof weather.location != 'undefined'">
        <div class="flex flex-col items-center mt-5">					
          <div class="text-2xl mb-4"> 
            <div class="h-full bg-white p-4 bg-gradient-to-b from-cyan-500 to-violet-500 rounded-full">
              <div class="px-6 py-2 bg-slate-200 rounded-full font-bold">
                {{ weather.location.name }} <br>
                {{ weather.location.region }}
                <div v-if='weather.location.name !==  weather.location.country'>
                    {{ weather.location.country }}
                </div>

              </div>
            </div>
          </div>
          <div class="mt-2 font-semibold flex"> 
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--fxemoji" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path fill="#C4F0F2" d="M322 301.232V71.413C322 34.182 292.232 4 255 4s-67 30.182-67 67.414v229.82c-28 20.659-46.207 53.812-46.207 91.193c0 62.631 50.664 113.403 113.294 113.403S368.24 455.056 368.24 392.426c0-37.382-18.24-70.535-46.24-91.194z"></path><path fill="#FF473E" d="M303 332.538V172h-96v160.538c-18 14.088-28.794 35.674-28.794 59.887c0 42.448 34.367 76.859 76.815 76.859s76.772-34.411 76.772-76.859c.001-24.213-10.793-45.799-28.793-59.887z"></path><ellipse fill="#FF6E83" cx="255.107" cy="172.222" rx="48.152" ry="11.106"></ellipse><path fill="#597B91" d="M239.514 91c0 2.659-2.156 5-4.815 5H188V86h46.7c2.659 0 4.814 2.341 4.814 5zm-4.814 55H188v10h46.7c2.659 0 4.815-2.341 4.815-5c-.001-2.659-2.156-5-4.815-5zm0 60H188v10h46.7c2.659 0 4.815-2.341 4.815-5c-.001-2.659-2.156-5-4.815-5zm.3 60.496V266h-47v10h47v.125c2 0 4.815-2.156 4.815-4.815S237 266.496 235 266.496z"></path></svg>
            <p class="text-2xl">
              {{ Math.round(weather.current.temp_c) }}°c 
              <span class="text-[12px] align-super">(last update: {{ weather.current.last_updated.slice(10) }})</span>
            </p>
          </div>
          <p class="mb-4 ">
            <span class="font-semibold">Feels like:</span>  {{ weather.current.feelslike_c }}°c
          </p>
          <div class="text-xl">
            Condition: <span class="font-semibold">{{ weather.current.condition.text }}. </span> 
          </div>

          <div class="text-xl mt-16">
            <h2 class="font-bold mb-1 underline">Additional data:</h2>

            <div class="ml-1">
                <p>
                    - Humidity: <span class="font-thin">{{ weather.current.humidity }}%</span> <br>                    
                    - Wind: <span class="font-thin">{{ weather.current.wind_kph }}km/h</span> <br>
                    - Gusts: <span class="font-thin">{{ weather.current.gust_kph }}km/h</span> <br>                    
                    - Precipitations: <span class="font-thin">{{ weather.current.precip_mm }}mm</span> <br>
                </p>
            </div>

            <div class="mb-4">
                <h2 class="font-bold mb-1 underline mt-4"> Air quality:</h2>
                <p>
                    - Carbon monoxyde: <span class="font-thin">{{ Math.round(weather.current.air_quality.co) }}μg/m3</span> <br>
                    - Nitrogen oxide : <span class="font-thin">{{ Math.round(weather.current.air_quality.o3) }}μg/m3</span> <br>
                </p>

                <div v-if="weather.current.air_quality['gb-defra-index'] == 1 && weather.current.air_quality['gb-defra-index'] <= 3">
                    - Air quality index: <span class="text-green-500 text-2xl"> {{ weather.current.air_quality['gb-defra-index'] }} </span>
                    
                </div>
                <div v-else-if="weather.current.air_quality['gb-defra-index'] == 4 && weather.current.air_quality['gb-defra-index'] <= 6">
                    - Air quality index: <span class="text-orange-400 text-2xl"> {{ weather.current.air_quality['gb-defra-index'] }} </span>
                </div>
                <div v-else-if="weather.current.air_quality['gb-defra-index'] == 7 && weather.current.air_quality['gb-defra-index'] <= 9">
                    - Air quality index: <span class="text-red-500 text-2xl"> {{ weather.current.air_quality['gb-defra-index'] }} </span>
                </div>
                <div v-else-if="weather.current.air_quality['gb-defra-index'] >= 9">
                    - Air quality index: <span class="text-rose-900 text-2xl"> {{ weather.current.air_quality['gb-defra-index'] }} </span>
                </div>
            </div>
          </div>

            <table class="w-56 border-collapse border border-slate-500">
                <thead>
                <tr>
                    <th class="border border-slate-600">Air Pollution</th>
                    <th class="border border-slate-600">Value</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td class="border border-slate-600 text-green-500">Low</td>
                    <td class="border border-slate-600 text-green-500">1-3</td>
                </tr>
                <tr>
                    <td class="border border-slate-600 text-orange-400">Moderate</td>
                    <td class="border border-slate-600 text-orange-400">4-6</td>
                </tr>
                <tr>
                    <td class="border border-slate-600 text-red-500">High</td>
                    <td class="border border-slate-600 text-red-500">7-9</td>
                </tr>
                    <tr>
                        <td class="border border-slate-600 text-rose-900">Very High</td>
                        <td class="border border-slate-600 text-rose-900">10</td>
                    </tr>
                </tbody>
            </table>
            <a href="https://uk-air.defra.gov.uk/air-pollution/daqi" class="after:content-['_↗'] underline">source</a>
        </div>
      </section>
    </div>
  </main>
</template>
<script>
export default {
  name: 'App',  

  data() {
    return {

      today: new Date().toLocaleDateString('en-EN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }).charAt(0).toUpperCase() + new Date().toLocaleDateString('en-EN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }).slice(1),
      api_key: `${process.env.VUE_APP_API_KEY}`,
      url: "https://api.weatherapi.com/v1/current.json?key=",
      query: "",
      weather: {},
    }
  },

  methods: {
		
    fetchWeather(e) {
      if (e.key == "Enter") {
        fetch(`${this.url}${this.api_key}&q=${this.query}&aqi=yes`)
          .then(res => {
            return res.json();
          }).then(this.setResults);
      }
    },

    setResults(res) {
      this.weather = res;
    },
  }
}
</script>