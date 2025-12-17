import { useState } from 'react';
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardHeader,
  CardActions,
  CardMedia,
  Button,
  IconButton,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Checkbox,
  FormControlLabel,
  Switch,
  Slider,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Divider,
  Chip,
  Badge,
  Alert,
  AlertTitle,
  LinearProgress,
  CircularProgress,
  Tabs,
  Tab,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Breadcrumbs,
  Link,
  Rating,
  Tooltip,
  Fab,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  Stepper,
  Step,
  StepLabel,
  Drawer,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar,
  ToggleButton,
  ToggleButtonGroup,
  Pagination,
  Skeleton,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Settings as SettingsIcon,
  Person as PersonIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  ExpandMore as ExpandMoreIcon,
  Favorite as FavoriteIcon,
  Share as ShareIcon,
  MoreVert as MoreVertIcon,
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Save as SaveIcon,
  Print as PrintIcon,
  Dashboard as DashboardIcon,
  ShoppingCart as ShoppingCartIcon,
  Notifications as NotificationsIcon,
  Search as SearchIcon,
  DarkMode as DarkModeIcon,
  LightMode as LightModeIcon,
  CheckCircle as CheckCircleIcon,
  Warning as WarningIcon,
  Error as ErrorIcon,
  Info as InfoIcon,
  FormatAlignLeft as FormatAlignLeftIcon,
  FormatAlignCenter as FormatAlignCenterIcon,
  FormatAlignRight as FormatAlignRightIcon,
  FormatBold as FormatBoldIcon,
  FormatItalic as FormatItalicIcon,
  FormatUnderlined as FormatUnderlinedIcon,
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
  AttachMoney as AttachMoneyIcon,
  People as PeopleIcon,
  Inventory as InventoryIcon,
} from '@mui/icons-material';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  Legend,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from 'recharts';

// Sample data for charts
const lineData = [
  { name: 'Jan', revenue: 4000, expenses: 2400, profit: 1600 },
  { name: 'Feb', revenue: 3000, expenses: 1398, profit: 1602 },
  { name: 'Mar', revenue: 2000, expenses: 9800, profit: -7800 },
  { name: 'Apr', revenue: 2780, expenses: 3908, profit: -1128 },
  { name: 'May', revenue: 1890, expenses: 4800, profit: -2910 },
  { name: 'Jun', revenue: 2390, expenses: 3800, profit: -1410 },
  { name: 'Jul', revenue: 3490, expenses: 4300, profit: -810 },
  { name: 'Aug', revenue: 4200, expenses: 3200, profit: 1000 },
  { name: 'Sep', revenue: 5100, expenses: 2900, profit: 2200 },
  { name: 'Oct', revenue: 4800, expenses: 3100, profit: 1700 },
  { name: 'Nov', revenue: 5500, expenses: 3400, profit: 2100 },
  { name: 'Dec', revenue: 6200, expenses: 3800, profit: 2400 },
];

const barData = [
  { name: 'Product A', sales: 4000, returns: 240 },
  { name: 'Product B', sales: 3000, returns: 139 },
  { name: 'Product C', sales: 2000, returns: 980 },
  { name: 'Product D', sales: 2780, returns: 390 },
  { name: 'Product E', sales: 1890, returns: 480 },
];

const pieData = [
  { name: 'Desktop', value: 400, color: '#0088FE' },
  { name: 'Mobile', value: 300, color: '#00C49F' },
  { name: 'Tablet', value: 200, color: '#FFBB28' },
  { name: 'Other', value: 100, color: '#FF8042' },
];

const radarData = [
  { subject: 'Performance', A: 120, B: 110, fullMark: 150 },
  { subject: 'Reliability', A: 98, B: 130, fullMark: 150 },
  { subject: 'Security', A: 86, B: 130, fullMark: 150 },
  { subject: 'Scalability', A: 99, B: 100, fullMark: 150 },
  { subject: 'Usability', A: 85, B: 90, fullMark: 150 },
  { subject: 'Support', A: 65, B: 85, fullMark: 150 },
];

// Sample table data
const tableRows = [
  { id: 1, name: 'John Smith', email: 'john@example.com', role: 'Admin', status: 'Active', lastLogin: '2024-01-15' },
  { id: 2, name: 'Jane Doe', email: 'jane@example.com', role: 'Editor', status: 'Active', lastLogin: '2024-01-14' },
  { id: 3, name: 'Bob Wilson', email: 'bob@example.com', role: 'Viewer', status: 'Inactive', lastLogin: '2024-01-10' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Editor', status: 'Active', lastLogin: '2024-01-15' },
  { id: 5, name: 'Charlie Davis', email: 'charlie@example.com', role: 'Admin', status: 'Pending', lastLogin: '2024-01-12' },
];

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [tabValue, setTabValue] = useState(0);
  const [sliderValue, setSliderValue] = useState(30);
  const [alignment, setAlignment] = useState('left');
  const [formats, setFormats] = useState(() => ['bold']);
  const [activeStep, setActiveStep] = useState(1);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [rating, setRating] = useState(4);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#1976d2',
      },
      secondary: {
        main: '#dc004e',
      },
      background: {
        default: darkMode ? '#121212' : '#f5f5f5',
        paper: darkMode ? '#1e1e1e' : '#ffffff',
      },
    },
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      h4: {
        fontWeight: 600,
      },
      h6: {
        fontWeight: 600,
      },
    },
    shape: {
      borderRadius: 8,
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
          },
        },
      },
    },
  });

  const steps = ['Account Setup', 'Personal Info', 'Preferences', 'Review'];

  const StatCard = ({ title, value, change, icon, color }) => (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Box>
            <Typography color="textSecondary" variant="body2" gutterBottom>
              {title}
            </Typography>
            <Typography variant="h4" component="div" sx={{ fontWeight: 600 }}>
              {value}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
              {change > 0 ? (
                <TrendingUpIcon sx={{ color: 'success.main', fontSize: 20, mr: 0.5 }} />
              ) : (
                <TrendingDownIcon sx={{ color: 'error.main', fontSize: 20, mr: 0.5 }} />
              )}
              <Typography
                variant="body2"
                sx={{ color: change > 0 ? 'success.main' : 'error.main' }}
              >
                {change > 0 ? '+' : ''}{change}% from last month
              </Typography>
            </Box>
          </Box>
          <Avatar sx={{ bgcolor: color, width: 48, height: 48 }}>
            {icon}
          </Avatar>
        </Box>
      </CardContent>
    </Card>
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        {/* App Bar */}
        <AppBar position="fixed" elevation={1}>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              UI Component Gallery
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <TextField
                size="small"
                placeholder="Search..."
                variant="outlined"
                InputProps={{
                  startAdornment: <SearchIcon sx={{ color: 'inherit', mr: 1, opacity: 0.7 }} />,
                  sx: {
                    bgcolor: 'rgba(255,255,255,0.15)',
                    borderRadius: 2,
                    '& fieldset': { border: 'none' },
                    color: 'inherit',
                    '& input': { color: 'inherit' },
                    '& input::placeholder': { color: 'inherit', opacity: 0.7 },
                  },
                }}
              />
              <IconButton color="inherit">
                <Badge badgeContent={4} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton color="inherit" onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
              <Avatar sx={{ width: 32, height: 32, ml: 1 }}>M</Avatar>
            </Box>
          </Toolbar>
        </AppBar>

        <Container maxWidth="xl" sx={{ mt: 10, mb: 4 }}>
          {/* Breadcrumbs */}
          <Breadcrumbs sx={{ mb: 3 }}>
            <Link color="inherit" href="#" underline="hover" sx={{ display: 'flex', alignItems: 'center' }}>
              <HomeIcon sx={{ mr: 0.5 }} fontSize="small" />
              Home
            </Link>
            <Link color="inherit" href="#" underline="hover">
              Components
            </Link>
            <Typography color="text.primary">Gallery</Typography>
          </Breadcrumbs>

          {/* Page Header */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" gutterBottom>
              Component Gallery
            </Typography>
            <Typography variant="body1" color="textSecondary">
              A comprehensive showcase of UI components for your design system
            </Typography>
          </Box>

          {/* Stats Cards */}
          <Typography variant="h6" sx={{ mb: 2 }}>Dashboard Metrics</Typography>
          <Grid container spacing={3} sx={{ mb: 4 }}>
            <Grid item xs={12} sm={6} md={3}>
              <StatCard
                title="Total Revenue"
                value="$48,294"
                change={12.5}
                icon={<AttachMoneyIcon />}
                color="primary.main"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StatCard
                title="Total Users"
                value="2,847"
                change={8.2}
                icon={<PeopleIcon />}
                color="success.main"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StatCard
                title="Orders"
                value="1,423"
                change={-3.1}
                icon={<ShoppingCartIcon />}
                color="warning.main"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StatCard
                title="Inventory"
                value="8,549"
                change={5.7}
                icon={<InventoryIcon />}
                color="info.main"
              />
            </Grid>
          </Grid>

          {/* Charts Section */}
          <Typography variant="h6" sx={{ mb: 2 }}>Data Visualization</Typography>
          <Grid container spacing={3} sx={{ mb: 4 }}>
            <Grid item xs={12} lg={8}>
              <Card>
                <CardHeader title="Revenue Overview" subheader="Monthly performance metrics" />
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={lineData}>
                      <defs>
                        <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#1976d2" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#1976d2" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#dc004e" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#dc004e" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#333' : '#eee'} />
                      <XAxis dataKey="name" stroke={darkMode ? '#999' : '#666'} />
                      <YAxis stroke={darkMode ? '#999' : '#666'} />
                      <RechartsTooltip
                        contentStyle={{
                          backgroundColor: darkMode ? '#1e1e1e' : '#fff',
                          border: `1px solid ${darkMode ? '#333' : '#ddd'}`,
                          borderRadius: 8,
                        }}
                      />
                      <Legend />
                      <Area type="monotone" dataKey="revenue" stroke="#1976d2" fillOpacity={1} fill="url(#colorRevenue)" />
                      <Area type="monotone" dataKey="expenses" stroke="#dc004e" fillOpacity={1} fill="url(#colorExpenses)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Card sx={{ height: '100%' }}>
                <CardHeader title="Traffic Sources" subheader="Device breakdown" />
                <CardContent>
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <RechartsTooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <CardHeader title="Product Performance" subheader="Sales vs Returns" />
                <CardContent>
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={barData}>
                      <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#333' : '#eee'} />
                      <XAxis dataKey="name" stroke={darkMode ? '#999' : '#666'} />
                      <YAxis stroke={darkMode ? '#999' : '#666'} />
                      <RechartsTooltip
                        contentStyle={{
                          backgroundColor: darkMode ? '#1e1e1e' : '#fff',
                          border: `1px solid ${darkMode ? '#333' : '#ddd'}`,
                          borderRadius: 8,
                        }}
                      />
                      <Legend />
                      <Bar dataKey="sales" fill="#1976d2" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="returns" fill="#dc004e" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <CardHeader title="System Comparison" subheader="Feature analysis" />
                <CardContent>
                  <ResponsiveContainer width="100%" height={250}>
                    <RadarChart data={radarData}>
                      <PolarGrid stroke={darkMode ? '#333' : '#ddd'} />
                      <PolarAngleAxis dataKey="subject" stroke={darkMode ? '#999' : '#666'} />
                      <PolarRadiusAxis stroke={darkMode ? '#999' : '#666'} />
                      <Radar name="System A" dataKey="A" stroke="#1976d2" fill="#1976d2" fillOpacity={0.5} />
                      <Radar name="System B" dataKey="B" stroke="#dc004e" fill="#dc004e" fillOpacity={0.5} />
                      <Legend />
                    </RadarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Table Section */}
          <Typography variant="h6" sx={{ mb: 2 }}>Data Tables</Typography>
          <Card sx={{ mb: 4 }}>
            <CardHeader
              title="User Management"
              subheader="Manage team members and their permissions"
              action={
                <Button variant="contained" startIcon={<AddIcon />} size="small">
                  Add User
                </Button>
              }
            />
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell padding="checkbox">
                      <Checkbox />
                    </TableCell>
                    <TableCell>User</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Role</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Last Login</TableCell>
                    <TableCell align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tableRows.map((row) => (
                    <TableRow key={row.id} hover>
                      <TableCell padding="checkbox">
                        <Checkbox />
                      </TableCell>
                      <TableCell>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Avatar sx={{ width: 32, height: 32 }}>{row.name[0]}</Avatar>
                          <Typography variant="body2">{row.name}</Typography>
                        </Box>
                      </TableCell>
                      <TableCell>{row.email}</TableCell>
                      <TableCell>
                        <Chip
                          label={row.role}
                          size="small"
                          variant="outlined"
                          color={row.role === 'Admin' ? 'primary' : 'default'}
                        />
                      </TableCell>
                      <TableCell>
                        <Chip
                          label={row.status}
                          size="small"
                          color={row.status === 'Active' ? 'success' : row.status === 'Pending' ? 'warning' : 'default'}
                        />
                      </TableCell>
                      <TableCell>{row.lastLogin}</TableCell>
                      <TableCell align="right">
                        <IconButton size="small"><EditIcon fontSize="small" /></IconButton>
                        <IconButton size="small"><DeleteIcon fontSize="small" /></IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
              <Pagination count={10} color="primary" />
            </Box>
          </Card>

          {/* Cards Section */}
          <Typography variant="h6" sx={{ mb: 2 }}>Content Cards</Typography>
          <Grid container spacing={3} sx={{ mb: 4 }}>
            {[1, 2, 3, 4].map((item) => (
              <Grid item xs={12} sm={6} md={3} key={item}>
                <Card>
                  <CardMedia
                    component="div"
                    sx={{
                      height: 140,
                      bgcolor: `hsl(${item * 60}, 70%, ${darkMode ? '30%' : '85%'})`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <DashboardIcon sx={{ fontSize: 48, opacity: 0.5 }} />
                  </CardMedia>
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      Project {item}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      A brief description of the project and its key features.
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 0.5, mt: 2 }}>
                      <Chip label="React" size="small" />
                      <Chip label="MUI" size="small" />
                    </Box>
                  </CardContent>
                  <CardActions sx={{ justifyContent: 'space-between' }}>
                    <Box>
                      <IconButton size="small"><FavoriteIcon fontSize="small" /></IconButton>
                      <IconButton size="small"><ShareIcon fontSize="small" /></IconButton>
                    </Box>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Form Controls & Lists */}
          <Grid container spacing={3} sx={{ mb: 4 }}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardHeader title="Form Controls" subheader="Input components and controls" />
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField fullWidth label="Full Name" variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField fullWidth label="Email Address" variant="outlined" type="email" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth>
                        <InputLabel>Role</InputLabel>
                        <Select label="Role" defaultValue="editor">
                          <MenuItem value="admin">Admin</MenuItem>
                          <MenuItem value="editor">Editor</MenuItem>
                          <MenuItem value="viewer">Viewer</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label="Phone" variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography gutterBottom>Experience Level</Typography>
                      <Slider
                        value={sliderValue}
                        onChange={(e, v) => setSliderValue(v)}
                        valueLabelDisplay="auto"
                        marks={[
                          { value: 0, label: 'Beginner' },
                          { value: 50, label: 'Intermediate' },
                          { value: 100, label: 'Expert' },
                        ]}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Newsletter" />
                        <FormControlLabel control={<Switch defaultChecked />} label="Notifications" />
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography gutterBottom>Rating</Typography>
                      <Rating
                        value={rating}
                        onChange={(e, newValue) => setRating(newValue)}
                        size="large"
                      />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%' }}>
                <CardHeader title="Activity Feed" subheader="Recent notifications" />
                <List sx={{ maxHeight: 400, overflow: 'auto' }}>
                  {[
                    { icon: <CheckCircleIcon color="success" />, primary: 'Deployment successful', secondary: 'Production environment updated', time: '2 min ago' },
                    { icon: <WarningIcon color="warning" />, primary: 'High CPU usage detected', secondary: 'Server-02 at 92% capacity', time: '15 min ago' },
                    { icon: <InfoIcon color="info" />, primary: 'New user registered', secondary: 'john.doe@example.com joined', time: '1 hour ago' },
                    { icon: <ErrorIcon color="error" />, primary: 'Payment failed', secondary: 'Order #12345 declined', time: '2 hours ago' },
                    { icon: <PersonIcon color="primary" />, primary: 'Team member added', secondary: 'Jane Smith joined Engineering', time: '3 hours ago' },
                    { icon: <EmailIcon color="secondary" />, primary: 'Email campaign sent', secondary: '2,500 recipients reached', time: '5 hours ago' },
                  ].map((item, index) => (
                    <Box key={index}>
                      <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                          <Avatar sx={{ bgcolor: 'transparent' }}>
                            {item.icon}
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={item.primary}
                          secondary={
                            <>
                              <Typography component="span" variant="body2" color="text.primary">
                                {item.secondary}
                              </Typography>
                              <Typography component="span" variant="caption" sx={{ display: 'block', mt: 0.5 }}>
                                {item.time}
                              </Typography>
                            </>
                          }
                        />
                      </ListItem>
                      {index < 5 && <Divider variant="inset" component="li" />}
                    </Box>
                  ))}
                </List>
              </Card>
            </Grid>
          </Grid>

          {/* Alerts Section */}
          <Typography variant="h6" sx={{ mb: 2 }}>Alerts & Notifications</Typography>
          <Grid container spacing={2} sx={{ mb: 4 }}>
            <Grid item xs={12} md={6}>
              <Alert severity="success" sx={{ mb: 2 }}>
                <AlertTitle>Success</AlertTitle>
                Your changes have been saved successfully.
              </Alert>
              <Alert severity="info" sx={{ mb: 2 }}>
                <AlertTitle>Information</AlertTitle>
                A new software update is available for download.
              </Alert>
            </Grid>
            <Grid item xs={12} md={6}>
              <Alert severity="warning" sx={{ mb: 2 }}>
                <AlertTitle>Warning</AlertTitle>
                Your storage is almost full. Consider upgrading your plan.
              </Alert>
              <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                Unable to connect to the server. Please try again later.
              </Alert>
            </Grid>
          </Grid>

          {/* Progress & Tabs */}
          <Grid container spacing={3} sx={{ mb: 4 }}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardHeader title="Progress Indicators" />
                <CardContent>
                  <Typography variant="body2" gutterBottom>Linear Progress</Typography>
                  <LinearProgress variant="determinate" value={65} sx={{ mb: 2, height: 8, borderRadius: 4 }} />

                  <Typography variant="body2" gutterBottom>Buffer Progress</Typography>
                  <LinearProgress variant="buffer" value={45} valueBuffer={60} sx={{ mb: 3, height: 8, borderRadius: 4 }} />

                  <Box sx={{ display: 'flex', gap: 4, justifyContent: 'center', mt: 2 }}>
                    <Box sx={{ textAlign: 'center' }}>
                      <CircularProgress variant="determinate" value={75} size={60} />
                      <Typography variant="body2" sx={{ mt: 1 }}>75%</Typography>
                    </Box>
                    <Box sx={{ textAlign: 'center' }}>
                      <CircularProgress variant="determinate" value={45} size={60} color="secondary" />
                      <Typography variant="body2" sx={{ mt: 1 }}>45%</Typography>
                    </Box>
                    <Box sx={{ textAlign: 'center' }}>
                      <CircularProgress variant="determinate" value={90} size={60} color="success" />
                      <Typography variant="body2" sx={{ mt: 1 }}>90%</Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card>
                <CardHeader title="Tabs Navigation" />
                <Tabs value={tabValue} onChange={(e, v) => setTabValue(v)} variant="fullWidth">
                  <Tab label="Overview" />
                  <Tab label="Analytics" />
                  <Tab label="Settings" />
                </Tabs>
                <CardContent>
                  {tabValue === 0 && (
                    <Typography>Overview content with key metrics and summary information.</Typography>
                  )}
                  {tabValue === 1 && (
                    <Typography>Analytics content with detailed charts and data analysis.</Typography>
                  )}
                  {tabValue === 2 && (
                    <Typography>Settings content with configuration options and preferences.</Typography>
                  )}
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Stepper */}
          <Card sx={{ mb: 4 }}>
            <CardHeader title="Multi-Step Process" subheader="Guided workflow example" />
            <CardContent>
              <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 3 }}>
                <Button
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep(activeStep - 1)}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  onClick={() => setActiveStep(Math.min(activeStep + 1, steps.length - 1))}
                >
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </Box>
            </CardContent>
          </Card>

          {/* Accordions */}
          <Typography variant="h6" sx={{ mb: 2 }}>Expandable Sections</Typography>
          <Box sx={{ mb: 4 }}>
            {['General Settings', 'Privacy & Security', 'Notifications', 'Advanced Options'].map((title, index) => (
              <Accordion key={title} defaultExpanded={index === 0}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>{title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="textSecondary">
                    Configure your {title.toLowerCase()} here. This section contains various options
                    and settings that allow you to customize your experience.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>

          {/* Buttons & Toggle Groups */}
          <Card sx={{ mb: 4 }}>
            <CardHeader title="Buttons & Controls" />
            <CardContent>
              <Typography variant="subtitle2" gutterBottom>Button Variants</Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 3 }}>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
                <Button variant="text">Text</Button>
                <Button variant="contained" color="secondary">Secondary</Button>
                <Button variant="contained" color="success">Success</Button>
                <Button variant="contained" color="error">Error</Button>
                <Button variant="contained" disabled>Disabled</Button>
              </Box>

              <Typography variant="subtitle2" gutterBottom>Button Sizes</Typography>
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap', mb: 3 }}>
                <Button variant="contained" size="small">Small</Button>
                <Button variant="contained" size="medium">Medium</Button>
                <Button variant="contained" size="large">Large</Button>
              </Box>

              <Typography variant="subtitle2" gutterBottom>Icon Buttons</Typography>
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap', mb: 3 }}>
                <Button variant="contained" startIcon={<AddIcon />}>Add Item</Button>
                <Button variant="outlined" startIcon={<EditIcon />}>Edit</Button>
                <Button variant="contained" color="error" startIcon={<DeleteIcon />}>Delete</Button>
                <IconButton color="primary"><SettingsIcon /></IconButton>
                <IconButton color="secondary"><FavoriteIcon /></IconButton>
              </Box>

              <Typography variant="subtitle2" gutterBottom>Toggle Groups</Typography>
              <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
                <ToggleButtonGroup
                  value={alignment}
                  exclusive
                  onChange={(e, v) => v && setAlignment(v)}
                  size="small"
                >
                  <ToggleButton value="left"><FormatAlignLeftIcon /></ToggleButton>
                  <ToggleButton value="center"><FormatAlignCenterIcon /></ToggleButton>
                  <ToggleButton value="right"><FormatAlignRightIcon /></ToggleButton>
                </ToggleButtonGroup>

                <ToggleButtonGroup
                  value={formats}
                  onChange={(e, v) => setFormats(v)}
                  size="small"
                >
                  <ToggleButton value="bold"><FormatBoldIcon /></ToggleButton>
                  <ToggleButton value="italic"><FormatItalicIcon /></ToggleButton>
                  <ToggleButton value="underlined"><FormatUnderlinedIcon /></ToggleButton>
                </ToggleButtonGroup>
              </Box>
            </CardContent>
          </Card>

          {/* Chips & Badges */}
          <Card sx={{ mb: 4 }}>
            <CardHeader title="Chips & Badges" />
            <CardContent>
              <Typography variant="subtitle2" gutterBottom>Chip Variants</Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 3 }}>
                <Chip label="Default" />
                <Chip label="Primary" color="primary" />
                <Chip label="Secondary" color="secondary" />
                <Chip label="Success" color="success" />
                <Chip label="Warning" color="warning" />
                <Chip label="Error" color="error" />
                <Chip label="Clickable" onClick={() => {}} />
                <Chip label="Deletable" onDelete={() => {}} />
                <Chip avatar={<Avatar>M</Avatar>} label="With Avatar" />
                <Chip icon={<FavoriteIcon />} label="With Icon" />
              </Box>

              <Typography variant="subtitle2" gutterBottom>Badge Examples</Typography>
              <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                <Badge badgeContent={4} color="primary">
                  <EmailIcon />
                </Badge>
                <Badge badgeContent={99} color="secondary">
                  <NotificationsIcon />
                </Badge>
                <Badge badgeContent={999} max={99} color="error">
                  <ShoppingCartIcon />
                </Badge>
                <Badge variant="dot" color="success">
                  <PersonIcon />
                </Badge>
              </Box>
            </CardContent>
          </Card>

          {/* Skeleton Loading */}
          <Card sx={{ mb: 4 }}>
            <CardHeader title="Loading Skeletons" subheader="Placeholder components for loading states" />
            <CardContent>
              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <Skeleton variant="rectangular" height={140} sx={{ borderRadius: 1 }} />
                  <Skeleton variant="text" sx={{ fontSize: '1.5rem', mt: 1 }} />
                  <Skeleton variant="text" width="60%" />
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Skeleton variant="circular" width={48} height={48} />
                    <Box sx={{ flex: 1 }}>
                      <Skeleton variant="text" width="80%" />
                      <Skeleton variant="text" width="40%" />
                    </Box>
                  </Box>
                  <Skeleton variant="rectangular" height={100} sx={{ mt: 2, borderRadius: 1 }} />
                </Grid>
                <Grid item xs={12} md={4}>
                  <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
                  <Skeleton variant="text" />
                  <Skeleton variant="text" />
                  <Skeleton variant="text" width="80%" />
                  <Skeleton variant="rounded" height={40} sx={{ mt: 2 }} />
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          {/* Dialog & Snackbar Demo */}
          <Card sx={{ mb: 4 }}>
            <CardHeader title="Dialogs & Snackbars" />
            <CardContent>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button variant="outlined" onClick={() => setDialogOpen(true)}>
                  Open Dialog
                </Button>
                <Button variant="outlined" onClick={() => setSnackbarOpen(true)}>
                  Show Snackbar
                </Button>
              </Box>
            </CardContent>
          </Card>

          {/* Footer */}
          <Box sx={{ textAlign: 'center', py: 4, borderTop: 1, borderColor: 'divider' }}>
            <Typography variant="body2" color="textSecondary">
              UI Component Gallery - Built with React and Material-UI
            </Typography>
            <Typography variant="caption" color="textSecondary">
              A showcase of modern UI components for design system reference
            </Typography>
          </Box>
        </Container>

        {/* Speed Dial FAB */}
        <SpeedDial
          ariaLabel="Actions"
          sx={{ position: 'fixed', bottom: 24, right: 24 }}
          icon={<SpeedDialIcon />}
        >
          <SpeedDialAction icon={<SaveIcon />} tooltipTitle="Save" />
          <SpeedDialAction icon={<PrintIcon />} tooltipTitle="Print" />
          <SpeedDialAction icon={<ShareIcon />} tooltipTitle="Share" />
          <SpeedDialAction icon={<EditIcon />} tooltipTitle="Edit" />
        </SpeedDial>

        {/* Dialog */}
        <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} maxWidth="sm" fullWidth>
          <DialogTitle>Confirmation Required</DialogTitle>
          <DialogContent>
            <Typography>
              Are you sure you want to proceed with this action? This dialog demonstrates
              the modal component for user confirmations and important messages.
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
            <Button variant="contained" onClick={() => setDialogOpen(false)}>Confirm</Button>
          </DialogActions>
        </Dialog>

        {/* Snackbar */}
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={4000}
          onClose={() => setSnackbarOpen(false)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert onClose={() => setSnackbarOpen(false)} severity="success" variant="filled">
            Action completed successfully!
          </Alert>
        </Snackbar>
      </Box>
    </ThemeProvider>
  );
}

export default App;
