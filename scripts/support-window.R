library(ggplot2)

df <- read.table(file("stdin"), col.names = c("version", "releaseDate"), colClasses = c("factor", "Date"))
twoYearsAgo <- as.POSIXlt(Sys.time())
twoYearsAgo$year <- twoYearsAgo$year - 2
supported <- subset(df, releaseDate >= as.Date(twoYearsAgo))
endDate <- as.POSIXlt(supported$releaseDate)
endDate$year <- endDate$year + 2
endDate <- as.Date(endDate)
# Zebra striping
supported$color = c("#3178C6", "#235A97")
# Clip 1/4 of the earliest supported version. Cuts off the release date
# (unimportant?) but gives the visual impression of additional,
# unsupported versions?
earliestDate <- min(supported$releaseDate)
limitDate <- earliestDate + (min(endDate) - earliestDate) / 4
ggplot(supported, aes(releaseDate, version)) +
  geom_linerange(aes(xmin = releaseDate, xmax = endDate), color = supported$color, size = 22 / .pt) +
  geom_text(aes(releaseDate + (endDate - releaseDate) / 2, label = version), color = "#FFFFFF", fontface = "bold") +
  geom_text(aes(releaseDate + (endDate - releaseDate) / 4, label = format(releaseDate, "%Y-%m")), color = "#FFFFFF", size = 8.8 / .pt) +
  geom_text(aes(releaseDate + (endDate - releaseDate) * 3 / 4, label = format(endDate, "%Y-%m")), color = "#FFFFFF", size = 8.8 / .pt) +
  scale_x_date(name = NULL, limits = c(limitDate, NA), expand = c(0, NA), oob = scales::squish, position = "top") +
  scale_y_discrete(limits = rev, name = NULL, labels = NULL) +
  theme_minimal()
ggsave("docs/support-window.svg", height = 3)
