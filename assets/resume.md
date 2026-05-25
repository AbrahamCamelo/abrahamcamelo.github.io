```latex
% Canadian ATS-friendly resume template
% Paste this into Overleaf as main.tex

\documentclass[11pt,letterpaper]{article}

\usepackage[margin=0.62in]{geometry}
\usepackage[hidelinks]{hyperref}
\usepackage{enumitem}
\usepackage{titlesec}
\usepackage{tabularx}
\usepackage[T1]{fontenc}
\usepackage[utf8]{inputenc}
\usepackage{helvet}
\renewcommand{\familydefault}{\sfdefault}

\pagenumbering{gobble}
\setlength{\parindent}{0pt}
\setlength{\parskip}{1.5pt}
\setlist[itemize]{leftmargin=*, topsep=1pt, itemsep=1pt, parsep=0pt}

\titleformat{\section}{\normalsize\bfseries}{}{0em}{}[\titlerule]
\titlespacing*{\section}{0pt}{6pt}{3pt}

\newcommand{\resumeSubheading}[4]{%
\begin{tabular*}{\textwidth}{l@{\extracolsep{\fill}}r}
\textbf{#1} & #2 \\
\textit{#3} & \textit{#4}
\end{tabular*}\vspace{-4pt}
}

\newcommand{\projectHeading}[3]{%
\noindent\begin{tabular*}{\textwidth}{@{}l@{\extracolsep{\fill}}r@{}}
\textbf{#1} & #2
\end{tabular*}\par
\textit{#3}\par\vspace{-4pt}
}

\begin{document}

% ===================== HEADER =====================
\begin{center}
    {\Large \textbf{Abraham Camelo Guerrero}}\par
    Toronto, ON, Canada $\mid$ +1 437-451-8956 $\mid$ \href{mailto:abraham.camelo18@hotmail.com}{abraham.camelo18@hotmail.com} $\mid$ \href{https://www.linkedin.com/in/acamelog}{linkedin.com/in/acamelog}
\end{center}

% ===================== SUMMARY =====================
\section*{Professional Summary}
Applied Machine Learning and Data Science professional experienced in building reproducible data pipelines, ML experiments, forecasting workflows, NLP/LLM evaluation pipelines, dashboards, and research-driven data products. Strong foundation in Engineering Physics and Information Systems, with experience translating complex data into practical insights for technical and non-technical audiences. Collaborative, adaptable, and people-centered, with a strong commitment to team well-being, clear communication, and responsible problem solving.

% ===================== SKILLS =====================
\section*{Technical Skills}
\begin{itemize}
    \item \textbf{Programming and Data:} Python, SQL/MySQL, Pandas, NumPy, Jupyter Notebooks, MATLAB, Selenium, Git.
    \item \textbf{Machine Learning and Analytics:} model development, model evaluation, classification, regression, clustering, NLP/LLMs, embeddings, semantic similarity, prompt engineering, feature engineering, benchmarking, online learning, scikit-learn.
    \item \textbf{Time Series and Statistics:} forecasting, trend analysis, interpolation, walk-forward testing, experimental design, statistical reporting.
    \item \textbf{Visualization and BI:} Power BI, Streamlit, dashboards, Matplotlib, Plotly, Folium, GeoPandas, geospatial visualization.
    \item \textbf{Languages:} Spanish native, English C1 certified, French A2 in progress.
\end{itemize}

% ===================== EXPERIENCE =====================
\section*{Experience}
\resumeSubheading
{ML / Data Analysis Research Intern}{Dec. 2024 -- Mar. 2026}
{VIBRAINT}{Toronto, ON, Canada}
\begin{itemize}
    \item Designed experiments to evaluate how machine learning models adapt when new labeled data becomes available in streaming-data environments.
    \item Implemented and benchmarked ML models for EEG-based prediction tasks, including CSP, FBCSP, Riemannian methods, SVM, Logistic Regression, and Elastic Net.
    \item Compared multiple model update strategies, including offline training, incremental learning, rolling-window training, and cold-start approaches.
    \item Evaluated model performance over time using backtesting, prequential evaluation, accuracy tables, and visual summaries for research interpretation.
    \item Contributed methodology, results, and interpretation for a first-author NAT'26 conference paper accepted and presented for publication.
\end{itemize}

\resumeSubheading
{Data Analyst Intern}{Jun. 2024 -- Aug. 2024}
{MITACS @ York University}{Toronto, ON, Canada}
\begin{itemize}
    \item Built a reproducible data pipeline to collect, clean, transform, and analyze 22 years of environmental and crop phenology data across the U.S. Corn Belt.
    \item Improved dataset completeness by reconstructing 30\% of missing environmental observations using time-series interpolation methods.
    \item Identified a 0.2$^\circ$C regional warming trend in Iowa and analyzed how environmental variables related to crop development patterns.
    \item Created automated summaries, statistical outputs, and geospatial visualizations in Python to support research documentation and weekly team updates.
\end{itemize}

\resumeSubheading
{Data Analyst Intern}{Jul. 2023 -- Jan. 2024}
{ISA Intercolombia}{Medellin, Colombia}
\begin{itemize}
    \item Supported data collection, integration, automation, visualization, and analytics workflows for internal technology and climate-related initiatives.
    \item Improved an image classification model by curating 1,000+ training images and retraining an Azure AI Custom Vision model, increasing accuracy from 80\% to 85\%.
    \item Automated a recurring IT requirements review process with Python and Selenium, reducing a 30-minute manual task to seconds.
    \item Built real-time Power BI dashboards connected to MySQL databases, helping stakeholders monitor climate-related variables dynamically.
    \item Produced geospatial visualizations of national meteorological data using Python-based mapping and visualization tools.
\end{itemize}

\resumeSubheading
{Nanofabrication Laboratory Intern}{Apr. 2022 -- Jun. 2022}
{King Abdullah University of Science and Technology}{Jeddah, Saudi Arabia}
\begin{itemize}
    \item Analyzed experimental data from semiconductor structures for LED applications, focusing on material characteristics and sample comparison.
    \item Generated quantitative graphs and supported technical reporting using microscopy data and analytical tools, including SEM, AFM, MATLAB, Python, and Excel.
\end{itemize}

% ===================== PROJECTS =====================
\section*{Selected Projects}
\projectHeading
{Time-Series Decomposition and Forecasting Framework}{2025 -- 2026}
{Python, Pandas, NumPy, scikit-learn, SSA, Gaussian Processes, ARIMA, LSTM, LightGBM, Ridge Regression}
\begin{itemize}
    \item Developed a time-series framework to identify seasonal patterns, reconstruct signals, estimate peak periods, and forecast future high-activity windows.
    \item Compared multiple forecasting models using walk-forward testing and multi-horizon evaluation to assess performance across seasonal patterns.
\end{itemize}

\projectHeading
{Seasonal Pattern Detection Using Gaussian Mixture Models}{2024 -- 2026}
{Python, scikit-learn, PCA, K-means, Gaussian Mixture Models, NASA POWER data}
\begin{itemize}
    \item Built a machine learning framework to detect and describe seasonal shifts in long-term climate data from 1981 to 2024.
    \item Applied clustering, dimensionality reduction, and trend analysis to support a first-author IEEE conference paper. GitHub: \href{https://github.com/AbrahamCamelo/Data-analysis-of-Climate-Change-in-Phillip-Island}{github.com/AbrahamCamelo/Data-analysis-of-Climate-Change-in-Phillip-Island}
\end{itemize}

\projectHeading
{LLM-Based Summarization Pipeline for Research-Topic Clusters}{2025 -- 2026}
{Python, LLMs, prompt engineering, semantic similarity, embeddings, clustering, NLP evaluation}
\begin{itemize}
    \item Developed an experimental NLP pipeline to evaluate LLM-based summarization of research-topic clusters across multiple generation workflows. Manuscript submitted to EMNLP 2026.
\end{itemize}

\projectHeading
{Streamlit Research Results Dashboard}{2026}
{Python, Streamlit, Pandas, NumPy, Matplotlib}
\begin{itemize}
    \item Developed and deployed a web application to present thesis results, visualize model outputs, and communicate time-series and forecasting analyses. App: \href{https://ethologylab-ai.streamlit.app/}{ethologylab-ai.streamlit.app}
\end{itemize}

% ===================== EDUCATION =====================
\section*{Education}
\resumeSubheading
{Master of Information Systems and Technology}{Expected Jun. 2026}
{York University}{Toronto, ON, Canada}
\begin{itemize}
    \item Coursework: Data Science, Machine Learning and its Applications, Applied Optimization in Information Systems, Business Analytics, Research Methods in Information Technology.
    \item Awards: Academic Excellence Fund, Winter 2026 cycle.
\end{itemize}

\resumeSubheading
{B.Sc. in Engineering Physics}{Graduated Nov. 2024}
{National University of Colombia}{Medellin, Colombia}
\begin{itemize}
    \item GPA: 4.5/5.0. Awarded undergraduate tuition waiver in 2024. Coursework included statistics, numerical methods, linear algebra, simulations, operations research, robotics, electronics, and sensor networks.
\end{itemize}

% ===================== PUBLICATIONS =====================
\section*{Publications and Research Outputs}
\begin{itemize}
    \item Camelo Guerrero, A. I., Kozyrskiy, B., \& Grachev, A. (2026). \textit{Benchmarking label-revealed online updates for EEG BCI decoding}. In Proceedings of the Neuroadaptive Technology Conference 2026 (NAT'26). Berlin, Germany. Accepted and presented, in press.
    
    \item Camelo, A. I., \& Khaiter, P. A. (2026). \textit{Investigating the Seasonality Factor with Gaussian Mixture Models}. In: Proceedings of International Conference on Artificial Intelligence, Computer, Data Sciences and Applications (ACDSA 2026), 5--7 February 2026, Boracay Island, Philippines, IEEE Xplore, pp. 1--6. DOI: 10.1109/ACDSA67686.2026.11467744.
    
    \item Camelo, A. I., \& Khaiter, P. A. (2026). \textit{The Role of Remote Sensing in Desertification Research with a Case Study of La Guajira, Colombia}. In: M. Kumar et al. (eds.), Remote Sensing for Monitoring Sustainable Development, Springer Nature. In print.
    
    \item Camelo, A. I., Khaiter, P. A., \& Wang, Z. (2026). \textit{Towards a Framework for Understanding Animal Behaviour and Climate Change: A Case Study of Little Penguins}. In: Information Technology and Systems, Springer Nature. Accepted.
\end{itemize}

% ===================== ADDITIONAL EXPERIENCE =====================
\section*{Additional Experience}
\resumeSubheading
{Teaching Assistant -- Information Technology and Organizations}{Sep. 2024 -- Aug. 2025}
{York University}{Toronto, ON, Canada}
\begin{itemize}
    \item Led tutorials, supported students, graded assignments, and provided feedback in an information technology and organizations course.
\end{itemize}

\resumeSubheading
{Teaching Assistant -- Engineering Courses}{Aug. 2021 -- Jun. 2023}
{National University of Colombia}{Medellin, Colombia}
\begin{itemize}
    \item Supported teaching, assessment, and student learning in Analog Electronics and Information and Communication Technology courses.
\end{itemize}

\end{document}

```