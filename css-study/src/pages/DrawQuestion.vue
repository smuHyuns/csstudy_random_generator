<template>
  <div class="container">
    <div class="questBox">
      <div class="box">
        <h1>1주차 - 주제 : 개발상식</h1>
        <button @click="drawQuestion">문제 뽑기</button>
      </div>
      <div class="quest">
        <ul>
          <li v-for="(q, index) in question" :key="index">{{ q }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { questions } from '../../config/questions';

const question = ref([]);

const drawQuestion = () => {
  const shuffled = [...questions].sort(() => 0.5 - Math.random());
  question.value = shuffled.slice(0, 3).map((q) => q.question);
};
</script>

<style scoped>
/* 전체 컨테이너 스타일 */
.container {
  width: 80vw;
  height: 80vh;
  font-family: 'Arial', sans-serif;
}

/* 문제 박스 */
.questBox {
  width: 50vw; /* 박스 크기 고정 */
  background: #fff;
  border-radius: 12px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  transition: all 0.3s ease-in-out;
  margin: 30px;
}

/* 제목 */
h1 {
  font-size: 22px;
  color: #333;
  font-weight: bold;
  margin-bottom: 15px;
}

/* 버튼 스타일 */
button {
  background: #007bff;
  color: #fff;
  border: none;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;
}

button:hover {
  background: #0056b3;
}

.quest ul {
  list-style: none;
  padding: 0;
  margin-top: 20px;
}

.quest li {
  background: #f8f9fa;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 10px;
  font-size: 16px;
  color: #333;
  font-weight: 500;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.quest li:hover {
  background: #e2e6ea;
  transform: translateY(-3px);
}
</style>
