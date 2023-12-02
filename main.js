const API_KEY = '×××';
const URL = "https://api.openai.com/v1/chat/completions";

function reply() {
    const text = document.getElementById("request_text").value;
    async function getResponse() {
        try {
            const response = await axios.post(
                URL,
                {
                    "model": "gpt-3.5-turbo",
                    "messages": [
                        { "role": "system", "content": '日本語で回答して' },
                        { "role": "system", "content": '企業名や商品名など企業が特定される情報は特定されないように一般化して'},
                        { "role": "system", "content": '元の文章から変更した箇所を青色で色付けして'},
                        { "role": "user", "content": 'text' }
                    ]
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${API_KEY}`,
                    },
                }
            );
            const chatgpt_response = response.data.choices[0].message.content;
            $("#response_text").val(chatgpt_response);
        } catch (error) {
            console.log(error);
        }
    }
    getResponse();
}
