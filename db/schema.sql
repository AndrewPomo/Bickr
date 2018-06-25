CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR,
  email VARCHAR,
  password VARCHAR,
  self_rating FLOAT,
  ext_rating FLOAT,
  ranking INT,
  conversation_count INT,
  convinced_ext INT,
  got_convinced INT,
  maleability INT
);

CREATE TABLE topics (
  id SERIAL PRIMARY KEY,
  topic_name VARCHAR,
  topic_question VARCHAR,
  yes_votes INT,
  no_votes INT,
  conversation_count INT,
  user_maleability INT,
  move_to_yes_count INT,
  move_to_no_count INT
);

CREATE TABLE conversations (
  id SERIAL PRIMARY KEY,
  user1 INT,
  user2 TEXT,
  topic INT,
  user1_self_rating INT,
  user1_ext_rating INT,
  user2_self_rating INT,
  user2_ext_rating INT,
  productivity INT,
  user_moved INT,
  winning_view INT,
  winning_user INT,
  losing_view INT,
  losing_user INT
);

