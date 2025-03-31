const express = require('express');
const winston = require('winston');

const app = express();
const port = 3000;

// 解析 JSON 请求
app.use(express.json());

// 配置日志
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'logs/combined.log' })
    ]
});

// **日志记录中间件，放到所有路由之前**
app.use((req, res, next) => {
    logger.info(`Request: ${req.method} ${req.url} from ${req.ip}`);
    next();
});

// 加法
app.get('/add', (req, res) => {
    const { num1, num2 } = req.query;
    if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
        logger.error('Invalid input for addition');
        return res.status(400).json({ error: 'Invalid input' });
    }
    const result = parseFloat(num1) + parseFloat(num2);
    logger.info(`Addition: ${num1} + ${num2} = ${result}`);
    res.json({ result });
});

// 减法
app.get('/subtract', (req, res) => {
    const { num1, num2 } = req.query;
    if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
        logger.error('Invalid input for subtraction');
        return res.status(400).json({ error: 'Invalid input' });
    }
    const result = parseFloat(num1) - parseFloat(num2);
    logger.info(`Subtraction: ${num1} - ${num2} = ${result}`);
    res.json({ result });
});

// 乘法
app.get('/multiply', (req, res) => {
    const { num1, num2 } = req.query;
    if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
        logger.error('Invalid input for multiplication');
        return res.status(400).json({ error: 'Invalid input' });
    }
    const result = parseFloat(num1) * parseFloat(num2);
    logger.info(`Multiplication: ${num1} * ${num2} = ${result}`);
    res.json({ result });
});

// 除法
app.get('/divide', (req, res) => {
    const { num1, num2 } = req.query;
    if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
        logger.error('Invalid input for division');
        return res.status(400).json({ error: 'Invalid input' });
    }
    if (parseFloat(num2) === 0) {
        logger.error('Attempt to divide by zero');
        return res.status(400).json({ error: 'Cannot divide by zero' });
    }
    const result = parseFloat(num1) / parseFloat(num2);
    logger.info(`Division: ${num1} / ${num2} = ${result}`);
    res.json({ result });
});

// 新增的高级算术操作：指数运算
app.get('/exponentiation', (req, res) => {
    const { base, exponent } = req.query;
    if (!base || !exponent || isNaN(base) || isNaN(exponent)) {
        logger.error('Invalid input for exponentiation');
        return res.status(400).json({ error: 'Invalid input' });
    }
    const result = Math.pow(parseFloat(base), parseFloat(exponent));
    logger.info(`Exponentiation: ${base} ^ ${exponent} = ${result}`);
    res.json({ result });
});

// 新增的高级算术操作：平方根
app.get('/sqrt', (req, res) => {
    const { number } = req.query;
    if (!number || isNaN(number) || parseFloat(number) < 0) {
        logger.error('Invalid input for square root');
        return res.status(400).json({ error: 'Invalid input or negative number' });
    }
    const result = Math.sqrt(parseFloat(number));
    logger.info(`Square Root: sqrt(${number}) = ${result}`);
    res.json({ result });
});

// 新增的高级算术操作：取模运算
app.get('/modulo', (req, res) => {
    const { dividend, divisor } = req.query;
    if (!dividend || !divisor || isNaN(dividend) || isNaN(divisor)) {
        logger.error('Invalid input for modulo');
        return res.status(400).json({ error: 'Invalid input' });
    }
    if (parseFloat(divisor) === 0) {
        logger.error('Attempt to divide by zero in modulo');
        return res.status(400).json({ error: 'Cannot divide by zero' });
    }
    const result = parseFloat(dividend) % parseFloat(divisor);
    logger.info(`Modulo: ${dividend} % ${divisor} = ${result}`);
    res.json({ result });
});

// 服务器监听端口
app.listen(port, () => {
    logger.info(`Calculator microservice running at http://localhost:${port}`);
});
app.get('/', (req, res) => {
    res.send('Calculator Microservice is running!');
});
