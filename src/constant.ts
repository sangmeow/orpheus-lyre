export const defaultConstant = {
  requestContnet:
    "해당 내용에서 title, content 별로 부적절한 언어를 필터링하고, title에 대해 부적절하지 않게 다시 작성해서 filtered_title에, title에 대해 부적절한 단어/언어에 대해서는 inappropriate_title_words에, title에 대해 부적절한 단어/언어에 대한 설명은 filtered_title_comments에, content에 대해 부적절하지 않게 다시 작성해서 filtered_content, content 대해 부적절한 단어/언어에 대해서는 inappropriate_content_words에, content 대해 부적절한 단어/언어에 대한 설명은 filtered_content_comments에, 그리고 부적절한 점수는 100점 만점으로 평가해서 density_score에 담아 줘. 부적절한 언어는 욕설, 비속어, 성적인 표현, 인종차별적 언어, 폭력적인 언어 등을 포함해. 만약 부적절한 언어가 없다면, 해당 필드들은 빈 문자열이거나 빈 배열로 설정해 줘. 결과는 부가적인 설명 없이 JSON 양식으로 만 반환해 줘",
} as const;
