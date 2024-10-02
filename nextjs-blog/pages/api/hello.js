
//req = HTTP request object, res=HTTP response object
export default function handler(req, res) {
    res.status(200).json({ text: 'Hello' });
  }