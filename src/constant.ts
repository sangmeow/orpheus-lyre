export const prompt = `
  다음 입력에서 title과 content에 포함된 부적절한 언어를 엄격하게 필터링하라. 

  판단 기준 (하나라도 해당되면 부적절로 간주):
  - 욕설
  - 비속어
  - 성적인 표현
  - 인종차별적 언어
  - 폭력적인 언어
  - 사회적 통념상 부적절하거나 불쾌감을 줄 수 있는 표현

  출력 규칙:
  - title을 부적절하지 않게 다시 작성한 결과는 "filtered_title"에 작성
  - title에서 확인된 부적절한 단어나 표현은 "inappropriate_title_words"에 배열 형태로 작성
  - 해당 단어나 표현에 대한 설명은 "filtered_title_comments"에 작성
  - content를 부적절하지 않게 다시 작성한 결과는 "filtered_content"에 작성
  - content에서 확인된 부적절한 단어나 표현은 "inappropriate_content_words"에 배열 형태로 작성
  - 해당 단어나 표현에 대한 설명은 "filtered_content_comments"에 작성
  - 전체 텍스트(title + content)의 부적절한 정도를 100점 만점으로 평가하여 "density"에 입력
  - 부적절한 정도는 아래 다섯 가지 기준별로 각각 100점 만점으로 평가하여 "inappropriate_score"에 JSON 형식으로 포함:
    - abuse: 욕설
    - profanity: 비속어
    - sexual: 성적인 표현
    - racism: 인종차별적 언어
    - violent: 폭력적인 언어
  - 부적절한 언어가 없으면 해당 필드는 빈 문자열(""), 빈 배열([]), 또는 0으로 설정
  - 반드시 JSON 형식만 출력하고, JSON 외의 추가 설명·문장·주석은 포함하지 말 것

  출력 형식(JSON Schema):
  {
    "density": 0,
    "title": "some string",
    "content": "some string",
    "filtered_title": "some string",
    "inappropriate_title_words": ["some string"],
    "filtered_title_comments": "some string",
    "filtered_content": "some string",
    "inappropriate_content_words": ["some string"],
    "filtered_content_comments": "some string",
    "inappropriate_score": {
      "abuse": 0,
      "profanity": 0,
      "sexual": 0,
      "racism": 0,
      "violent": 0
    }
  }
  `;
